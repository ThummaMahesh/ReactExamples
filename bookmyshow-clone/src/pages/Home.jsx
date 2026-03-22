import { Link } from "react-router-dom";
import movies from "../data/movies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Home() {
  return (
    <div className="container">

      {/* 🎬 Banner */}
      <div
        className="text-white p-4 rounded text-center mb-4"
        style={{
          background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
        }}
      >
        <h2 className="fw-bold">🎬 Welcome to MaheshShow</h2>
        <p>Book your favorite movies instantly</p>

        <Link to="/movies" className="btn btn-light mt-2">
          Browse Movies
        </Link>
      </div>

      {/* 🎞️ Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={10}
        slidesPerView={1}
        className="mb-4"
      >
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x200"
            className="w-100 rounded"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x200/ff4444"
            className="w-100 rounded"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x200/222222"
            className="w-100 rounded"
          />
        </SwiperSlide>
      </Swiper>

      {/* 🎭 Categories */}
      <div className="d-flex justify-content-around text-center mb-4">
        <div>
          <div className="rounded-circle">🎬</div>
          <small>Movies</small>
        </div>

        <div>
          <div className="rounded-circle">🎵</div>
          <small>Music</small>
        </div>

        <div>
          <div className="rounded-circle">😂</div>
          <small>Comedy</small>
        </div>

        <div>
          <div className="rounded-circle">🎤</div>
          <small>Events</small>
        </div>
      </div>

      {/* 🎬 Trending Movies */}
      <h3 className="mb-4">🔥 Trending Movies</h3>

      <div className="row">
        {movies.slice(0, 4).map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card shadow border-0 movie-card">

              <img
                src={movie.image}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h6 className="fw-bold">{movie.title}</h6>

                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-danger btn-sm"
                >
                  Book Now
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;