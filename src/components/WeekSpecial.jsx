import greekSalad from "../assets/images/greek-salad.jpg";
import bruchetta from "../assets/images/bruchetta.jpg";
import lemonDessert from "../assets/images/lemon-dessert.jpg";
const WeekSpecial = () => {
  return (
    <>
      <div className="header-special">
        <h1>
          This week <mark> specials!</mark>
        </h1>
        <a href="/" role="button" type="button" className="online-menu-btn">
          Online menu
        </a>
      </div>
      <div className="week-special-container">
        <div className="greek-salad">
          <img src={greekSalad} alt="greek-salad" className="greek-salad" />
          <h2>
            Greek Salad <span className="price">$9.99</span>
          </h2>
          <p>
            Lorm ipsum delor Lorm ipsum delor Lorm ipsum delorLorm ipsum delor
            ipsum delor Lorm ipsum delorLorm ipsum{" "}
          </p>
          <h3>Order delivery</h3>
        </div>
        <div className="bruchetta-weekly-section">
          <img
            src={bruchetta}
            alt="bruchetta-special"
            className="bruchetta-special"
          />
          <h2>
            Bruchetta <span className="price">$5.99</span>
          </h2>
          <p>
            Lorm ipsum delor Lorm ipsum delor Lorm ipsum delorLorm ipsum delor
            ipsum delor Lorm ipsum delorLorm ipsum{" "}
          </p>
          <h3>Order delivery</h3>
        </div>

        <div className="lemon-dessert">
          <img src={lemonDessert} alt="lemon dessert" className="" />
          <h2>
            Lemon Dessert <span className="price">$5.00</span>
          </h2>
          <p>
            Lorm ipsum delor Lorm ipsum delor Lorm ipsum delorLorm ipsum delor
            ipsum delor Lorm ipsum delorLorm ipsum{" "}
          </p>
          <h3>Order delivery</h3>
        </div>
      </div>
    </>
  );
};

export default WeekSpecial;
