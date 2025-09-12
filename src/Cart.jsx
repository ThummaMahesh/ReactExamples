import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  addOrder,
} from "./store";
import {
  calculateButtonDiscount,
  calculateTotal,
  getCouponDiscount,
} from "./discountUtils";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();
  const user=useSelector((state) => state.users);
  const [couponCodeResult, setCouponCodeResult] = useState({
    isValid: false,
    discountPercentage: 0,
    discountAmount: 0,
  });
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [cuponCode, setCuponCode] = useState("");
  const [buttonDiscount, setbuttonDiscount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [step, setStep] = useState("checkout"); // checkout → email → payment
  const [paymentMode, setPaymentMode] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart);

  let totalAmount = calculateTotal(cartItems);
  let discountAmount = calculateButtonDiscount(totalAmount, buttonDiscount);
  let shippingCost = totalAmount < 200 ? 50 : 0;
  let tax = totalAmount * 0.05;
  let finalPrice =
    totalAmount -
    discountAmount -
    couponCodeResult.discountAmount +
    shippingCost +
    tax;
  
  if (paymentMode === "COD") {
    finalPrice += 50; // Extra charge for COD
  }

  if (cartItems.length === 0) {
    return (
      <div className="container-fluid my-3">
        <h2 className="text-center">🛒 Cart is empty</h2>
      </div>
    );
  }


    const handlecheckout = () =>{
    if(!user.authenticated){
      navigate('/signin');
    }
    else{
      setStep("payment");
    }
  }


  // ✅ Place Order
  const proceedOrder = async () => {
    let duration = 2 * 1000;
    let end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    await Swal.fire({
      title: "🎉 Order Placed!",
      html: `
        <p>Your order has been placed successfully!</p>
        <p><b>Order ID:</b> #${Date.now()}</p>
        <p><b>Total:</b> ₹${finalPrice.toFixed(2)}</p>
        <p>We'll send you a confirmation email shortly.</p>
      `,
      icon: "success",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#4f46e5",
    });

    const order = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalAmount: finalPrice,
      appliedCoupon,
      email: userEmail,
    };
    dispatch(addOrder(order));
    dispatch(clearCart());

    const templateParams = {
      email: userEmail,
      order_id: Date.now(),
      orders: order.items.map((item) => ({
        name: item.name,
        price: item.price,
        units: item.quantity,
        image: `${window.location.origin}${item.image}`,
      })),
      cost: {
        shipping: shippingCost,
        tax,
        cod: paymentMode === "COD" ? 50 : 0,
        total: finalPrice.toFixed(2),
      },
    };

    emailjs
      .send("service_wqayxvn", "template_9y2dc8r", templateParams, "G3Lhqod60Pt6j5t75")
      .then(() => toast.success("Order confirmation email sent!"))
      .catch(() => toast.error("Failed to send confirmation email"));
  };

  // ✅ Coupon apply
  const handleApplyCoupon = () => {
    const result = getCouponDiscount(cuponCode, totalAmount);
    setCouponCodeResult(result);
    if (result.isValid) {
      setAppliedCoupon(cuponCode);
      setErrorMsg("");
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
      setAppliedCoupon("");
      setErrorMsg("❌ Invalid coupon code. Please try again.");
    }
  };

  // ✅ UPI Link for QR
  const upiLink = `upi://pay?pa=7680943067-2@ybl&pn=${encodeURIComponent(
    "Mahesh Store"
  )}&am=${finalPrice.toFixed(2)}&cu=INR`;

  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* LEFT - Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow p-4 mb-4">
            <h2 className="mb-4">🛒 Your Cart</h2>
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item py-3">
                  <div className="row align-items-center">
                    <div className="col-md-6 d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="itemimage rounded me-3"
                      />
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted d-block">
                          Quantity: {item.quantity}
                        </small>
                        <p className="mb-0">
                          ₹{item.price} x {item.quantity} ={" "}
                          <span className="fw-bold">
                            ₹{item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
                      <button
                        onClick={() => dispatch(incrementQuantity(item))}
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(decrementQuantity(item))}
                        className="btn btn-sm btn-outline-secondary me-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT - Order Summary + Email + Payment */}
        <div className="col-lg-4">
          {/* Order Summary */}
          <div className="card bg-light shadow-sm p-3 mb-3">
            <h5 className="mb-3">💳 Order Summary</h5>
            <table className="table table-borderless mb-2">
              <tbody>
                <tr>
                  <td>Total Amount</td>
                  <td className="text-end">₹{totalAmount.toFixed(2)}</td>
                </tr>
                {buttonDiscount !== 0 && (
                  <tr className="text-success">
                    <td>Button Discount ({buttonDiscount}%)</td>
                    <td className="text-end">- ₹{discountAmount.toFixed(2)}</td>
                  </tr>
                )}
                {couponCodeResult.isValid && (
                  <tr className="text-success">
                    <td>
                      Coupon "{appliedCoupon}" ({couponCodeResult.discountPercentage}
                      %)
                    </td>
                    <td className="text-end">
                      - ₹{couponCodeResult.discountAmount.toFixed(2)}
                    </td>
                  </tr>
                )}
                <tr>
                  <td>Shipping</td>
                  <td className="text-end">₹{shippingCost.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax (5%)</td>
                  <td className="text-end">₹{tax.toFixed(2)}</td>
                </tr>
                {paymentMode === "COD" && (
                  <tr>
                    <td>Cash on Delivery Fee</td>
                    <td className="text-end">₹50</td>
                  </tr>
                )}
                <tr className="fw-bold border-top">
                  <td>Final Price</td>
                  <td className="text-end text-primary fs-4">
                    ₹{finalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Discount Buttons */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setbuttonDiscount(10)}
                className="btn btn-outline-primary btn-sm"
              >
                10% Off
              </button>
              <button
                onClick={() => setbuttonDiscount(20)}
                className="btn btn-outline-primary btn-sm"
              >
                20% Off
              </button>
              <button
                onClick={() => setbuttonDiscount(30)}
                className="btn btn-outline-primary btn-sm"
              >
                30% Off
              </button>
              <button
                onClick={() => setbuttonDiscount(0)}
                className="btn btn-outline-dark btn-sm"
              >
                Remove Discount
              </button>
            </div>

            {/* Coupon Input */}
            <div className="d-flex mb-3">
              <input
                type="text"
                value={cuponCode}
                onChange={(e) => setCuponCode(e.target.value.toUpperCase())}
                placeholder="Enter coupon code"
                className={`form-control me-2 ${errorMsg ? "is-invalid" : ""}`}
              />
              <button onClk={handleApplyCoupon} className="btn btn-success">
                Applyic
              </button>
            </div>
            {errorMsg && (
              <div className="invalid-feedback d-block">{errorMsg}</div>
            )}

            {/* Checkout Step Buttons */}
            {step === "checkout" && (
              <div className="text-center mt-3">
                <button
                  className="btn btn-md btn-primary w-100"
                  onClick={handlecheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
            {/* Payment Section */}
            {step === "payment" && (
              <div className="card shadow p-3 text-center mt-3">
                <h4>Select Payment Mode</h4>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <button
                    className="btn btn-success"
                    onClick={() => setPaymentMode("QR")}
                  >
                    QR Code
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setPaymentMode("Card");
                      proceedOrder();
                    }}
                  >
                    Card
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setPaymentMode("COD");
                      proceedOrder();
                    }}
                  >
                    Cash on Delivery
                  </button>
                </div>

                {/* QR Code Section */}
                {paymentMode === "QR" && (
                  <div className="mt-4">
                    <h5>Scan & Pay</h5>
                    <QRCodeCanvas value={upiLink} size={200} includeMargin />
                    <p className="mt-2">
                      Pay ₹{finalPrice.toFixed(2)} to Mahesh Store
                    </p>
                    <button
                      className="btn btn-success mt-2"
                      onClick={() => proceedOrder()}
                    >
                      I have paid
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
