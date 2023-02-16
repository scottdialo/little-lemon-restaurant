import { useState } from "react";
import logo from "../assets/images/Logo.svg";
function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <nav className="main-nav">
          <menu>
            <li>
              <a href="/" className="logo-anchor">
                <img src={logo} alt="restaurant-logo" className="logo"></img>
              </a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </menu>
        </nav>

        {/* mobile menu */}
        <nav className="mobile-nav">
          <i class="fa-solid fa-bars fa-2x"></i>
          <menu>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </menu>
        </nav>
      </header>
    </>
  );
}

export default Header;
