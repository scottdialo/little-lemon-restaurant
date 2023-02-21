import chef1 from "../assets/images/chef1.jpg";
import chef2 from "../assets/images/chef2.jpg";

export const About = () => {
  return (
    <>
      <h1 className="ourStory">Our Story</h1>

      <div className="about-container">
        <div className="left-section">
          <h3 className="title">Little Lemon</h3>
          <p className="city">Chicago</p>
          <p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              cumque enim, nulla necessitatibus eveniet incidunt impedit dolore
              laboriosam iusto nisi. Autem hic molestias ipsum ipsam fugit
              repellendus excepturi odit a. Labore voluptate ea inventore
              sapiente vel ducimus molestias cum
            </p>
          </p>
        </div>
        <div className="right-section">
          <img src={chef1} alt="founder1" />
          <img src={chef2} alt="founder2" />
        </div>
      </div>
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Louis Hansel
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/fr/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Eiliv Aceron
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </>
  );
};
