import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import Menu from "../components/Menu";
import Reservations from "../components/Reservations";
import OrderOnline from "../components/OrderOnline";
import Login from "../components/Login";
import Homepage from "./Homepage";

function Header() {
  // script for hamburger menu
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <nav className="main-nav">
          <menu>
            <Link to="/homepage" className="navLink">
              <img src={logo} alt="restaurant-logo" className="logo"></img>
            </Link>
            <Link to="/homepage" className="navLink">
              Home
            </Link>
            <Link className="navLink" to="/about" element={<About />}>
              About
            </Link>
            <Link className="navLink" to="/menu" element={<Menu />}>
              Menu
            </Link>
            <Link
              className="navLink"
              to="/reservations"
              element={<Reservations />}
            >
              Reservations
            </Link>
            <Link
              className="navLink"
              to="/orderOnline"
              element={<OrderOnline />}
            >
              Order Online{" "}
            </Link>
            <Link className="navLink" to="/login" element={<Login />}>
              Login
            </Link>
          </menu>
        </nav>

        {/* mobile menu */}
        {/* <nav className="mobile-nav">
          <i
            className=" fa-solid fa-bars fa-2x"
            id="hamburger-menu"
            onClick={toggleClass}
          ></i>
          <menu className={isActive ? "show" : ""}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/about">Menu</Link>

            <Link to="/reservations">Reservations</Link>

            <Link to="/order-online">Order Online</Link>

            <Link to="/login">Login</Link>
          </menu>
        </nav> */}

        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/Reservations" element={<Reservations />}></Route>
          <Route path="/OrderOnline" element={<OrderOnline />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </header>
    </>
  );
}

export default Header;
