
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { addToWishlist, removeFromWishlist } from "./store";
import { Heart, HeartFill } from "react-bootstrap-icons"; // ❤️ icons
import { toast } from "react-toastify";

function VegCard({ item }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  // Check if this item is already in wishlist
  const isInWishlist = wishlist.some((wishItem) => wishItem.id === item.id);

  // Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.info(`${item.name} added to cart!`);
  };

  // Add / Remove from Wishlist
  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
      toast.error(`${item.name} removed from wishlist ❌`);
    } else {
      dispatch(addToWishlist(item));
      toast.success(`${item.name} added to wishlist ❤️`);
    }
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card h-100 shadow-lg border-0 rounded-2"
        style={{
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        {/* Wishlist Button */}
        <button
          className="btn btn-light rounded-circle shadow-sm position-absolute top-0 end-0 m-2 wishlist-btn"
          onClick={toggleWishlist}
        >
          {isInWishlist ? (
            <HeartFill size={18} className="text-danger" /> // ❤️ Filled
          ) : (
            <Heart size={18} className="text-danger" /> // 🤍 Outline
          )}
        </button>

        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top p-3"
          style={{
            height: "180px",
            objectFit: "contain",
          }}
        />

        <div className="card-body text-center">
          {/* Title */}
          <h5 className="card-title fw-bold text-truncate">{item.name}</h5>

          {/* Description */}
          <p
            className="card-text text-muted small"
            style={{
              minHeight: "40px",
            }}
          >
            {item.description}
          </p>

          {/* Price */}
          <h6 className="price-tag fw-bold text-success">₹ {item.price}</h6>

          {/* Add to Cart Button */}
          <button
            className="btn btn-gradient w-100 fw-semibold"
            onClick={handleAddToCart}
            style={{
              background: "linear-gradient(90deg, #28a745, #218838)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #218838, #1e7e34)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #28a745, #218838)";
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default VegCard;
