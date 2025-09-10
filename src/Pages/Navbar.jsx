import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          {/* Brand logo and name */}
          <a className="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/fox.png"
              alt="Logo"
            />
            Furniture
          </a>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} to="/">Furniture</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} to="/designers">Designers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} to="/Trends">Trends</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} to="/Blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} to="/About">About Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Sign Up Button */}
          <div className="d-flex">
            <button className="btn btn-signup ">Sign Up</button>
          </div>
        </div>
      </nav>
    </>

    
  );
}

export default Navbar;
