import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store"; // ✅ import cart action

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Move item to cart
  const moveToCart = (item) => {
    // ✅ Update Redux
    dispatch(addToCart(item));

    // ✅ Optional: also keep in localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Remove from wishlist
    removeFromWishlist(item.id);

    alert(`${item.name} moved to cart!`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary fw-bold">💖 Wishlist</h1>
      <p className="text-center text-muted">Your favorite items are here.</p>

      {wishlist.length === 0 ? (
        <p className="text-center text-danger fs-5">No items in wishlist yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price}</p>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => moveToCart(item)}
                  >
                    Move to Cart 🛒
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
