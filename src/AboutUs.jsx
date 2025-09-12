import React from "react";

function AboutUs() {
  return (
    <div className="container my-5">
      {/* Main Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">🌟 About Mahesh Mart 🌟</h1>
        <p className="lead text-secondary">
          Freshness, trust, and convenience — delivered straight to your home.
        </p>
      </div>

      {/* Company Intro */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <p className="fs-5 text-muted">
            <span className="fw-bold text-success">Mahesh Mart</span> is your
            trusted online grocery partner, founded with a simple vision:{" "}
            <strong>to make daily essentials affordable and accessible</strong>{" "}
            for every household. We bring together fresh groceries, dairy,
            non-veg, medicines, and more into one easy platform.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/public/about.jpeg"
            alt="Company"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="text-center bg-light p-4 rounded shadow-sm mb-5">
        <h2 className="fw-bold text-primary">🚀 Mission & Vision</h2>
        <p className="text-muted fs-5">
          <strong>Mission:</strong> To deliver healthy, fresh, and quality
          products to every family, every day.  
          <br />
          <strong>Vision:</strong> To become the most reliable and customer-first
          household marketplace in the country.
        </p>
      </div>

      {/* Values / Why Choose Us */}
      <div className="row mb-5">
        <h2 className="fw-bold text-success text-center mb-4">💡 Why Choose Us?</h2>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">⏱️ Fast Delivery</h5>
          <p className="text-muted">
            Get essentials delivered quickly and reliably to your doorstep.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">🥬 Fresh & Quality</h5>
          <p className="text-muted">
            We partner directly with farmers and trusted suppliers for quality.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">📞 Customer Support</h5>
          <p className="text-muted">
            Our team is always here to assist you with your needs and queries.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-warning">🛒 What We Offer</h2>
        <p className="text-secondary fs-5">
          Explore our wide range of categories designed to serve your daily
          needs.
        </p>
      </div>

      {/* Category Blocks */}
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <img
            src="/public/carousel/freshmilk.jpg"
            alt="Milk"
            className="img-fluid rounded shadow"
          />
          <h5 className="mt-2 text-primary">🥛 Dairy & Milk</h5>
          <p className="text-muted">
            Nutritious milk, paneer, curd, and more — fresh every morning.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="/public/carousel/veg&fruits.jpg"
            alt="Vegetables"
            className="img-fluid rounded shadow"
          />
          <h5 className="mt-2 text-success">🍎 Fruits & Vegetables</h5>
          <p className="text-muted">
            Farm-fresh produce that keeps your meals healthy and tasty.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="/public/carousel/snacks&sweets.jpg"
            alt="Sweets"
            className="img-fluid rounded shadow"
          />
          <h5 className="mt-2 text-warning">🍪 Snacks & Sweets</h5>
          <p className="text-muted">
            From crispy namkeens to traditional mithai, perfect for every
            occasion.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/public/carousel/nonveg.jpeg"
            alt="Non-Veg"
            className="img-fluid rounded shadow"
          />
          <h5 className="mt-2 text-danger">🍗 Non-Veg</h5>
          <p className="text-muted">
            Fresh chicken, mutton, and fish — protein-packed and hygienic.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/public/carousel/medicine.jpg"
            alt="Medicines"
            className="img-fluid rounded shadow"
          />
          <h5 className="mt-2 text-info">💊 Medicines</h5>
          <p className="text-muted">
            Essential medicines and supplements for your family’s health.
          </p>
        </div>
      </div>

      {/* Customer Promise */}
      <div className="text-center mt-5 p-4 bg-light rounded shadow">
        <h2 className="fw-bold text-danger">🤝 Our Promise</h2>
        <p className="fs-5 text-secondary">
          Your happiness is our priority — if you’re not satisfied,{" "}
          <strong>we’ll make it right</strong>.  
          At <span className="fw-bold text-success">Mahesh Mart</span>, you
          don’t just shop, you experience freshness, trust, and care.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
