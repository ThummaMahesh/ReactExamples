// App.jsx
import AboutUs from './AboutUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS (with Popper)
import "bootstrap-icons/font/bootstrap-icons.css";


import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Milk from './Milk';
import Cart from './Cart';
import Veg from './Veg';
import Icecreams from './icecreams';  
import Sweets from './Sweets';
import Orders from './OrdersHistory';
import PageNotFound from './PageNotFound';
import Nonveg from './Nonveg';
import Wishlist from './Wishlist';
import Medicine from './Medicine';
import Signin from './Signin';
import Register from './Register';
import Header from './header';
import Footer from './footer';
import Drinks from './drinks';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import default styling

import { useSelector } from 'react-redux';
import { useRef, useCallback } from 'react';
 // ✅ from react (not react-redux)

function App() {
  const totalQuantity = useSelector((state) => state.Cart.reduce((total, item) => total + item.quantity, 0 ));
  const wishhlistCount=useSelector((state) => state.wishlist.length);

  // 🔑 Ref points to the collapsible <div id="navbarNav">
  const collapseRef = useRef(null);

  

  // 🔑 One handler to close the menu after any nav click
  const handleNavClick = () => {
  const navbarCollapse = collapseRef.current;
  if (!navbarCollapse) return;

  // Get existing Bootstrap Collapse instance
  const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);

  if (bsCollapse) {
    bsCollapse.hide(); // collapse the menu
  } else {
    // create a temporary instance and hide
    new window.bootstrap.Collapse(navbarCollapse, { toggle: true }).hide();
  }
};


  return (
    <>
      <ToastContainer theme='dark' position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={true} draggable={true} pauseOnHover={true} />
    <BrowserRouter>
    <Header cartCount={totalQuantity} wishlistCount={wishhlistCount}/>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm custom-navbar px-2">
        <div className="container-fluid px-3">
          <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavClick}>
            <i className="bi bi-shop me-2"></i> Mahesh Mart
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 👇 attach the ref here */}
          <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
            {/* Left links */}
            <ul className="navbar-nav fs-6 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-info-circle-fill me-1"></i> About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-envelope-fill me-1"></i> Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/milk" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-cup-hot-fill me-1"></i> Milk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/veg" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-basket-fill me-1"></i> Veg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drinks" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                 <i className="bi bi-cup-straw me-1"></i> Drinks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/icecreams" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                 <i className="bi bi-ice-cream me-1">🍦</i> Ice Creams

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nonveg" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-egg-fried me-1"></i> NonVeg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sweets" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-basket-fill me-1"></i> Sweets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/medicine" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-capsule-pill me-1"></i> Medicine
                </NavLink>
              </li>
             
              
               <li className="nav-item">
                <NavLink to="/orders" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-card-checklist me-1"></i> Orders
                </NavLink>
              </li>
            </ul>
            

            {/* Right links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/wishlist" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-heart-fill me-1"></i> Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavClick}>
                  <i className="bi bi-cart-fill me-1"></i> Cart ({totalQuantity})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/sweets" element={<Sweets />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
         <Route path="/*" element={<PageNotFound />} />
         <Route path="/drinks" element={<Drinks />} />
         <Route path="/icecreams" element={<Icecreams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
