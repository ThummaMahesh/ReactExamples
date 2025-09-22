
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Autoplay, Pagination } from "swiper/modules";
import {  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useRef } from "react";
import './Home.css'
import  { useState, useEffect } from "react";


function Home() {

const categoriesRef =useRef(null);
const offerEndTime = new Date("2025-09-24T23:59:59").getTime();

const [timeLeft, setTimeLeft] = useState("");

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = offerEndTime - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    } else {
      setTimeLeft("Expired");
      clearInterval(timer);
    }
  }, 1000);

  return () => clearInterval(timer);
}, []);

         const features = [
    { icon: "bi-clock-fill", title: "Quick Delivery", desc: "Get groceries in 30 minutes" },
    { icon: "bi-basket3-fill", title: "Fresh & Quality", desc: "Handpicked items" },
    { icon: "bi-cash-stack", title: "Best Prices", desc: "Affordable everyday essentials" },
    { icon: "bi-box-seam", title: "Easy Returns", desc: "Hassle-free replacements" },
    { icon: "bi-shield-lock-fill", title: "Secure Payment", desc: "Safe & trusted checkout" },
    { icon: "bi-phone-fill", title: "24/7 Support", desc: "We are here to help you" },
  ];


const testimonials = [
  {
    text: "Fresh fruits delivered right on time! Quality was amazing.",
    name: "Aditya",
    image: "/Carousel/user4.jpg",
    rating: 5,
  },
  {
    text: "Loved the organic vegetables. Very fresh and affordable!",
    name: "Priya Patel",
    image: "/Carousel/user3.jpg",
    rating: 5,
  },
  {
    text: "Fast delivery and great packaging. Will order again.",
    name: "Rahul Verma",
    image: "/Carousel/user1.jpg",
    rating: 5,
  },
  {
    text: "Wide variety of grocery items at reasonable prices.",
    name: "Sneha Reddy",
    image:  "/Carousel/user2.jpg",
    rating: 5,
  },
];



const handleExplore = () =>{
         if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({
        behavior: "smooth", // smooth scrolling effect
        block: "start", // scroll to the start of the section
      });
    }
        }



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
            <button className="btn btn-warning btn-lg mx-2" onClick={handleExplore}>Shop Now</button>
          
          </div>
        </div>
      </section>




        <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4 fw-bold">Shop by Category</h2>

     <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // show only one at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {/* Dairy & Milk */}
          <SwiperSlide className="text-center">
            <Link to="/milk" className="text-decoration-none">
              <img
                src="/Carousel/freshmilk.jpg"
                alt="Dairy & Milk"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%", // 👈 control image width
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🥛 Dairy & Milk</h5>
                <p className="text-muted">Fresh and healthy milk products</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Drinks */}
          <SwiperSlide className="text-center">
            <Link to="/drinks" className="text-decoration-none">
              <img
                src="/Carousel/drinks.jpg"
                alt="Drinks"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🥤 Drinks</h5>
                <p className="text-muted">Cool and refreshing beverages</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Ice Creams */}
          <SwiperSlide className="text-center">
            <Link to="/icecreams" className="text-decoration-none">
              <img
                src="/Carousel/icecreams.jpg"
                alt="Ice Creams"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🍦 Ice Creams</h5>
                <p className="text-muted">Delicious and creamy desserts</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Fruits & Vegetables */}
          <SwiperSlide className="text-center">
            <Link to="/veg" className="text-decoration-none">
              <img
                src="/Carousel/veg&fruits.jpg"
                alt="Fruits & Vegetables"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🍎 Fruits & Vegetables</h5>
                <p className="text-muted">Freshly picked from farms</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Snacks & Sweets */}
          <SwiperSlide className="text-center">
            <Link to="/sweets" className="text-decoration-none">
              <img
                src="/Carousel/snacks&sweets.jpg"
                alt="Snacks & Sweets"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🍪 Snacks & Sweets</h5>
                <p className="text-muted">Delicious treats for everyone</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Non-Veg */}
          <SwiperSlide className="text-center">
            <Link to="/nonveg" className="text-decoration-none">
              <img
                src="/Carousel/nonveg.jpeg"
                alt="Non-Veg"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">🍗 Non-Veg</h5>
                <p className="text-muted">Fresh and quality meat items</p>
              </div>
            </Link>
          </SwiperSlide>

          {/* Medicines */}
          <SwiperSlide className="text-center">
            <Link to="/medicine" className="text-decoration-none">
              <img
                src="/Carousel/medicine.jpg"
                alt="Medicines"
                className="d-block mx-auto rounded"
                style={{
                  width: "80%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
              />
              <div className="mt-3">
                <h5 className="fw-bold">💊 Medicines</h5>
                <p className="text-muted">Healthcare essentials delivered</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
  </div>
</section>



      {/* ---------- Why Choose Us Section ---------- */}
      <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="choose-us-card border p-4 text-center h-100">
              <i className={`bi ${feature.icon} fs-1 text-primary`}></i>
              <h5 className="mt-3 fw-bold text-success">{feature.title}</h5>
              <p className="mt-2">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>




    {/* ---------- Special Offers Section ---------- */}
<div className="container my-5 text-center">
  <h2 className="fw-bold mb-4 text-danger">🔥 Special Offers</h2>

  <div className="row justify-content-center">
    {/* Weekend Sale */}
    <div className="col-12 d-flex justify-content-center mb-4">
      <div className="card h-100 text-center border-0 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="/vegetabless.jpg"   // keep inside public folder, no "public/" in path
          className="card-img-top rounded"
          alt="Weekend Sale"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">Weekend Sale!</h5>
          <p className="card-text">Up to 20% off on all vegetables.</p>
          <span className="text-muted">Ends in: {timeLeft}</span>

        </div>
      </div>
    </div>

    {/* Buy 2 Get 1 Free */}
    <div className="col-12 d-flex justify-content-center">
      <div className="card h-100 text-center border-0 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="/fruits.webp"
          className="card-img-top rounded"
          alt="Buy 2 Get 1 Free"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">Buy 2 Get 1 Free</h5>
          <p className="card-text">Applicable on selected fruits.</p>
          <span className="text-muted">Ends in: {timeLeft}</span>

        </div>
      </div>
    </div>

  </div>
</div>




       <div className="container my-5">
  <h2 className="text-center fw-bold mb-4 text-success">
    Happy Customers
  </h2>

  <div className="d-flex justify-content-center">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={20}
      style={{ maxWidth: "1100px", width: "100%" }}  // ✅ keeps it centered
      breakpoints={{
        0: { slidesPerView: 1 },     // Mobile
        768: { slidesPerView: 2 },   // Tablet
        1024: { slidesPerView: 3 },  // Desktop
      }}
    >
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div
            className="p-4 bg-white rounded-4 shadow-sm h-100"
            style={{ border: "1px solid #e9f5e9" }}
          >
            <div className="d-flex align-items-center mb-3">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle me-3"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  border: "2px solid #28a745",
                }}
              />
              <div>
                <h6 className="mb-0 fw-bold text-success">{t.name}</h6>
                <div className="text-warning small">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < t.rating ? "bi-star-fill" : "bi-star"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            <p className="fst-italic text-muted">“{t.text}”</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>



 
     </div>
     
  );
}

export default Home;
