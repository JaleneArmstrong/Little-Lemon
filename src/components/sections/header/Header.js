import React from "react";
import "./Header.css";
import heroImage from "../../../assests/Hero.jpg";

function Header() {
  return (
    <header className="hero-section">
      <div className="hero-container">
        <article className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking" className="hero-button">
            Reserve a Table
          </a>
        </article>
        <figure className="hero-image-container">
          <img
            src={heroImage}
            alt="A delicious dish served at Little Lemon"
            className="hero-image"
          />
        </figure>
      </div>
    </header>
  );
}

export default Header;
