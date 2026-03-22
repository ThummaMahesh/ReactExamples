import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTheatre, setSelectedTheatre] = useState("");

  const movie = movies.find((m) => m.id === parseInt(id));

  const timings = ["10:00 AM", "2:00 PM", "6:00 PM"];
  const theatres = ["PVR Cinemas", "INOX", "Cinepolis"];

  return (
    <div className="container mt-4 text-center">
      <h2>{movie.title} 🎬</h2>

      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "200px", margin: "20px 0" }}
      />

      <p>⭐ {movie.rating}</p>

      {/* 🎬 Theatre Selection */}
      <h4>Select Theatre 🎭</h4>
      <div className="mb-3">
        {theatres.map((theatre) => (
          <button
            key={theatre}
            className={`btn m-2 ${
              selectedTheatre === theatre
                ? "btn-success"
                : "btn-outline-dark"
            }`}
            onClick={() => setSelectedTheatre(theatre)}
          >
            {theatre}
          </button>
        ))}
      </div>

      {/* ⏰ Time Selection */}
      <h4>Select Show Time ⏰</h4>
      <div className="mb-3">
        {timings.map((time) => (
          <button
            key={time}
            className={`btn m-2 ${
              selectedTime === time
                ? "btn-success"
                : "btn-outline-dark"
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Proceed */}
      <button
        className="btn btn-danger"
        disabled={!selectedTime || !selectedTheatre}
        onClick={() =>
          navigate(
            `/booking/${id}?time=${selectedTime}&theatre=${selectedTheatre}`
          )
        }
      >
        Select Seats
      </button>
    </div>
  );
}

export default MovieDetails;