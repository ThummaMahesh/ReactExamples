import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import { motion } from "framer-motion";

/* 🔥 Floating Button Component */
function FloatingButton() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
const location = useLocation();
  return (
    <button
      className="btn btn-danger"
      style={{
        position: "fixed",
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "30px",
        padding: "12px 25px",
        zIndex: 1000,
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      }}
      onClick={() => navigate("/movies")}
    >
      📍 Browse Cinemas
    </button>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
    <div className={dark ? "dark" : ""}></div>

      {/* 🔝 Header */}
      <Header />

      {/* 🔍 Navbar */}
      <Navbar search={search} setSearch={setSearch} />

      {/* 📄 Pages */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies search={search} />} />
    <Route path="/movie/:id" element={<MovieDetails />} />
    <Route path="/booking/:id" element={<Booking />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/success" element={<Success />} />
    <Route path="/events" element={<Events />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</motion.div>

      {/* 🔥 Floating Button */}
      {!location.pathname.includes("booking") &&
 !location.pathname.includes("payment") &&
 !location.pathname.includes("success") &&<FloatingButton /> }

      {/* 📱 Bottom Navigation */}
      <BottomNav />

    </BrowserRouter>
  );
}

export default App;