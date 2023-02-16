import restaurantFood from "../assets/images/restaurantfood.jpg";

const Main = () => {
  return (
    <main className="container">
      <div className="hero-section">
        <section className="left">
          <div className="header-left">
            <h1 className="title">Little Lemon</h1>
            <p className="chicago">Chicago</p>

            <p className="home-description">
              lorem ipsum delor lorem ipsum delor lorem ipsum delorlorem ipsum
              delor lorem ipsum delor lorem ipsum delor lorem ipsum delorlorem
              ipsum delor
            </p>
            <a href="/" type="button" className="reserve-btn" role="button">
              Reserve a table
            </a>
          </div>
        </section>
        <section className="right">
          <img src={restaurantFood} alt="bruchetta" className="bruchetta"></img>
        </section>
      </div>
    </main>
  );
};

export default Main;
