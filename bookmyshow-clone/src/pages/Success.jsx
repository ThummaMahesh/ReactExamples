import { useLocation, Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function Success() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4 text-center" style={{ width: "350px" }}>
        
        <h3 className="text-success">🎉 Booking Confirmed</h3>

        {data && (
          <>
            <p><b>🎬 Movie:</b> {data.movieName}</p>
            <p><b>🎭 Theatre:</b> {data.theatre}</p>
            <p><b>⏰ Time:</b> {data.showTime}</p>
            <p><b>🎟️ Seats:</b> {data.seats.join(", ")}</p>

            <h5 className="text-danger">₹{data.total}</h5>

            {/* QR Code */}
            <QRCodeCanvas
              value={`${data.movieName}-${data.theatre}-${data.showTime}-${data.seats.join(",")}`}
              size={120}
            />
          </>
        )}

        <Link to="/movies" className="btn btn-primary mt-3">
          Book More
        </Link>
      </div>
    </div>
  );
}

export default Success;