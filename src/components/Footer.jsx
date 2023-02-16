import footerLogo from "../assets/images/logo_square.png";

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
