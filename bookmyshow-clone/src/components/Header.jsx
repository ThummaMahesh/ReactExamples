import { FaSearch, FaBell } from "react-icons/fa";

function Header({ dark, setDark }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
        padding: "10px 15px",
        color: "white",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
      className="d-flex justify-content-between align-items-center"
    >
      {/* Left */}
      <div>
        <small>It All Starts Here!</small>
      </div>

      {/* Right */}
      <div className="d-flex gap-3 align-items-center">

        {/* 🔍 Icons */}
        <FaSearch />
        <FaBell />

        {/* 🌙 Dark Mode Button */}
        <button
          onClick={() => setDark(!dark)}
          className="btn btn-light btn-sm"
        >
          🌙
        </button>

      </div>
    </div>
  );
}

export default Header;