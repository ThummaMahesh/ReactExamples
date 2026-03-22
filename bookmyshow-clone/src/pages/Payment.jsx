import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [method, setMethod] = useState("upi");

  return (
    <div className="container text-center mt-5">
      <h2>💳 Payment</h2>

      {/* Payment options */}
      <div className="mb-3">
        <button onClick={() => setMethod("upi")} className="btn btn-outline-dark m-2">
          UPI
        </button>
        <button onClick={() => setMethod("card")} className="btn btn-outline-dark m-2">
          Card
        </button>
      </div>

      {/* UPI */}
      {method === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="form-control w-50 mx-auto mb-3"
        />
      )}

      {/* Card */}
      {method === "card" && (
        <>
          <input type="text" placeholder="Card Number" className="form-control w-50 mx-auto mb-2" />
          <input type="text" placeholder="Expiry" className="form-control w-50 mx-auto mb-2" />
          <input type="text" placeholder="CVV" className="form-control w-50 mx-auto mb-3" />
        </>
      )}

      <button
        className="btn btn-success"
        onClick={() => navigate("/success", { state: location.state })}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;