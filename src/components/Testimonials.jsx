import React from "react";
import bruchetta from "../assets/images/bruchetta.jpg";
import lemonDessert from "../assets/images/lemon-dessert.jpg";
import greekSalad from "../assets/images/greek-salad.jpg";
import profilePic from "../assets/images/profilePic.jpeg";

function Testimonials() {
  return (
    <>
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonials-container">
        <div className="review-box">
          <img src={profilePic} className="profilePic" alt="profilePic" />
          <p className="author">
            <strong>Author:</strong> Jenny D
          </p>

          <p src="" alt="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </p>
          <p className="review-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            quasi atque cum aliquam reiciendis assumenda?
          </p>
          <p>
            <img src={bruchetta} alt="food" />
          </p>
        </div>

        <div className="review-box">
          <img src={profilePic} className="profilePic" alt="profilePic" />
          <p className="author">
            <strong>Author:</strong> Hailey M
          </p>
          <p src="" alt="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </p>
          <p className="review-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            quasi atque cum aliquam reiciendis assumenda?
          </p>
          <p>
            <img src={greekSalad} alt="food" />
          </p>{" "}
        </div>

        <div className="review-box">
          <img src={profilePic} className="profilePic" alt="profilePic" />
          <p className="author">
            <strong>Author:</strong> Jon L
          </p>
          <p src="" alt="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </p>
          <p className="review-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            quasi atque cum aliquam reiciendis assumenda?
          </p>
          <p>
            <img src={lemonDessert} alt="food" />
          </p>{" "}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
