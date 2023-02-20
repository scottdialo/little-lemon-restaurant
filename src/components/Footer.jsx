import { Link } from "react-router-dom";
import footerLogo from "../assets/images/logo_square.png";
import { About } from "./About";
import Homepage from "./Homepage";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Reservations from "./Reservations";

const Footer = () => {
  return (
    <>
      <footer>
        <img
          src={footerLogo}
          alt="restaurant-logo"
          className="footer-logo"
        ></img>
        <ul>
          <Link className="footer-link" to="/homepage" element={<Homepage />}>
            Home
          </Link>
          <Link className="footer-link" to="/about" element={<About />}>
            About
          </Link>
          <Link className="footer-link" to="/menu" element={<Menu />}>
            Menu
          </Link>
          <Link className="footer-link" to="/reservations" element={<Reservations />}>
            Reservations
          </Link>
          <Link className="footer-link" to="/orderOnline" element={<OrderOnline />}>
            Order Online
          </Link>
          <Link className="footer-link" to="/login" element={<Login />}>
            Login
          </Link>
        </ul>

        <ul className="contact">
          <h2>Contact</h2>
          <li>
            <a href="/">Address: 650 California St, San Francisco CA 94109</a>
          </li>
          <li>
            <a href="/">Phone: 800-678-0089</a>
          </li>
          <li>
            <a href="/">E-mail: support@littlelemonrestaurant.com</a>
          </li>
        </ul>
        <div>
          <h2>Follow us</h2>

          <ul className="social-media">
            <li>
              <a href="/">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-tiktok fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
