import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import movies from "../data/movies";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const movie = movies.find((m) => m.id === parseInt(id));

  const queryParams = new URLSearchParams(location.search);
  const showTime = queryParams.get("time");
  const theatre = queryParams.get("theatre");

  const [selectedSeats, setSelectedSeats] = useState([]);

  const pricePerSeat = 150;
  const total = selectedSeats.length * pricePerSeat;
  const bookedSeats = ["A3", "B2", "C4"];

  const rows = ["A", "B", "C", "D", "E"];
  const cols = 6;

  const handleSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h2>Select Seats 🎟️</h2>

      <p>🎬 Movie: {movie?.title}</p>
      <p>⏰ Show Time: {showTime}</p>
      <p>🎭 Theatre: {theatre}</p>

      {/* Screen */}
      <div
        className="bg-dark text-white py-2 mb-4"
        style={{ borderRadius: "10px" }}
      >
        SCREEN
      </div>

      {/* Seats */}
      {rows.map((row) => (
        <div key={row} className="d-flex justify-content-center mb-2">
          {Array.from({ length: cols }, (_, i) => {
            const seat = `${row}${i + 1}`;
            return (
              <button
                key={seat}
                className={`m-1 btn ${
                  bookedSeats.includes(seat)
                    ? "btn-dark text-white"
                    : selectedSeats.includes(seat)
                    ? "btn-success text-white"
                    : "btn-outline-dark"
                }`}
                style={{ minWidth: "45px" }}
                disabled={bookedSeats.includes(seat)}
                onClick={() => handleSelect(seat)}
              >
                {seat}
              </button>
            );
          })}
        </div>
      ))}

      {/* Selected Seats */}
      <h4 className="mt-3">
        Selected Seats: {selectedSeats.join(", ")}
      </h4>

      {/* Total Price */}
      <h4>Total Price: ₹{total}</h4>

      {/* ✅ FIXED BOOK BUTTON */}
      <button
        className="btn btn-danger mt-3"
        style={{ position: "relative", zIndex: 1000 }}
        onClick={() => {
          console.log("Clicked");

          if (selectedSeats.length === 0) {
            alert("Please select seats");
            return;
          }

          navigate("/payment", {
            state: {
              movieId: id,
              movieName: movie?.title,
              showTime: showTime,
              theatre: theatre,
              seats: selectedSeats,
              total: total,
            },
          });
        }}
      >
        Book Tickets
      </button>
    </div>
  );
}

export default Booking;