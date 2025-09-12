import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center text-white bg-primary py-5" 
        style={{ 
          background: "linear-gradient(90deg, #ff416c, #ff4b2b, #1e3c72)", 
          minHeight: "60vh" 
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">
            🛒 Welcome to Mahesh Mart
          </h1>
          <p className="lead mt-3">
            Your One-Stop Shop for Daily Needs
          </p>
          <div className="mt-4">
            <button className="btn btn-warning btn-lg mx-2">Shop Now</button>
            <button className="btn btn-light btn-lg mx-2">Explore Products</button>
          </div>
        </div>
      </section>




        <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Shop by Category</h2>
<div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
  {/* Carousel Indicators */}
  {/*  */}

  {/* Carousel Inner */}
  <div className="carousel-inner">

    {/* Dairy & Milk */}
    <div className="carousel-item active text-center">
      <Link to="/milk" className="text-decoration-none">
        <img
          src="/public/carousel/freshmilk.jpg"
          className="d-block w-100 rounded"
          alt="Dairy & Milk"
        />
        <div className="mt-3">
          <h5 className="fw-bold">🥛 Dairy & Milk</h5>
          <p className="text-muted">Fresh and healthy milk products</p>
        </div>
      </Link>
    </div>

    {/* Fruits & Vegetables */}
    <div className="carousel-item text-center">
      <Link to="/veg" className="text-decoration-none">
        <img
          src="/public/carousel/veg&fruits.jpg"
          className="d-block w-100 rounded"
          alt="Fruits & Vegetables"
        />
        <div className="mt-3">
          <h5 className="fw-bold">🍎 Fruits & Vegetables</h5>
          <p className="text-muted">Freshly picked from farms</p>
        </div>
      </Link>
    </div>

    {/* Snacks & Sweets */}
    <div className="carousel-item text-center">
      <Link to="/sweets" className="text-decoration-none">
        <img
          src="/public/carousel/snacks&sweets.jpg"
          className="d-block w-100 rounded"
          alt="Snacks & Sweets"
        />
        <div className="mt-3">
          <h5 className="fw-bold">🍪 Snacks & Sweets</h5>
          <p className="text-muted">Delicious treats for everyone</p>
        </div>
      </Link>
    </div>

    {/* Non-Veg */}
    <div className="carousel-item text-center">
      <Link to="/nonveg" className="text-decoration-none">
        <img
          src="/public/carousel/nonveg.jpeg"
          className="d-block w-100 rounded"
          alt="Non-Veg"
        />
        <div className="mt-3">
          <h5 className="fw-bold">🍗 Non-Veg</h5>
          <p className="text-muted">Fresh and quality meat items</p>
        </div>
      </Link>
    </div>

    {/* Medicines */}
    <div className="carousel-item text-center">
      <Link to="/medicine" className="text-decoration-none">
        <img
          src="/public/carousel/medicine.jpg"
          className="d-block w-100 rounded"
          alt="Medicines"
        />
        <div className="mt-3">
          <h5 className="fw-bold">💊 Medicines</h5>
          <p className="text-muted">Healthcare essentials delivered</p>
        </div>
      </Link>
    </div>

  </div> {/* closes carousel-inner */}

  {/* Carousel Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#categoryCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon  text-bg-dark rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#categoryCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon text-bg-dark rounded-circle" aria-hidden="true" ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
 </section>
     </div>
     
  );
}

export default Home;
