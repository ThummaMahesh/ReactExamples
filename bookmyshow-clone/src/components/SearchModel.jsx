import { useState } from "react";
import movies from "../data/movies";
import { Link } from "react-router-dom";

function SearchModal({ show, onClose }) {
  const [query, setQuery] = useState("");

  if (!show) return null;

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-start pt-5"
      style={{ zIndex: 999 }}
    >
      <div className="bg-white p-3 rounded w-75">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search movies..."
          className="form-control mb-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Results */}
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          {filtered.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              onClick={onClose}
              className="d-block p-2 text-decoration-none text-dark border-bottom"
            >
              🎬 {movie.title}
            </Link>
          ))}
        </div>

        {/* Close Button */}
        <button className="btn btn-danger mt-2 w-100" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default SearchModal;