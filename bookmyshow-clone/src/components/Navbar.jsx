import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <div className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center shadow">

      {/* Logo */}
      <h4 className="m-0 fw-bold text-danger">🎬 MaheshShow</h4>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control w-25"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Navigation */}
      <div>
        <Link to="/" className="text-white me-4 text-decoration-none">
          Home
        </Link>
        <Link to="/movies" className="text-white text-decoration-none">
          Movies
        </Link>
      </div>

    </div>
  );
}

export default Navbar;