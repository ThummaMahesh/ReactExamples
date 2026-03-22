import movies from "../data/movies";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
console.log("Movies loaded");

function Movies({ search }) {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">🎬 Now Showing</h2>

      <div className="row">
        {filteredMovies.map((movie) => (
          <motion.div
            className="col-md-3 mb-4"
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card shadow border-0 h-100 movie-card">

              <img
                src={movie.image}
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">{movie.title}</h5>
                <p className="text-warning">⭐ {movie.rating}</p>

                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-danger w-100"
                >
                  Book Now
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Movies;