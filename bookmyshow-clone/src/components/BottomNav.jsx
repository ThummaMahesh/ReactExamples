import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  return (
    <div
      className="d-flex justify-content-around align-items-center bg-white border-top"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
      }}
    >
      <Link to="/" className={location.pathname === "/" ? "text-danger" : "text-dark"}>
        Home
      </Link>

      <Link to="/movies" className={location.pathname === "/movies" ? "text-danger" : "text-dark"}>
        Movies
      </Link>

      <Link to="/events" className={location.pathname === "/events" ? "text-danger" : "text-dark"}>
        Events
      </Link>

      <Link to="/profile" className={location.pathname === "/profile" ? "text-danger" : "text-dark"}>
        Profile
      </Link>
    </div>
  );
}

export default BottomNav;