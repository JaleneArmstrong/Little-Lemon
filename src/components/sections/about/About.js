import React from "react";
import "../../Main.css";
import ownersA from "../../../assests/about/Mario and Adrian A.jpg";
import ownersB from "../../../assests/about/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about-section">
      <article className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials. We are
          a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </article>
      <figure className="about-images">
        <img
          src={ownersA}
          alt="Owners Mario and Adrian 1"
          className="about-image-a"
        />
        <img
          src={ownersB}
          alt="Owners Mario and Adrian 2"
          className="about-image-b"
        />
      </figure>
    </section>
  );
}

export default About;
