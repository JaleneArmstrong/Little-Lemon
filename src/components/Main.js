import React from "react";
import "./Main.css";
import greekSalad from "../assests/greek salad.jpg";
import bruchetta from "../assests/bruchetta.svg";
import lemonDessert from "../assests/lemon dessert.jpg";
// import testimonial1 from "../assets/testimonial1.jpg";
// import testimonial2 from "../assets/testimonial2.jpg";
import ownersA from "../assests/Mario and Adrian A.jpg";
import ownersB from "../assests/Mario and Adrian b.jpg";

const DeliveryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10v12H5z"></path>
    <path d="M14 9h4l4 4v4h-8v-8z"></path>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

function Main() {
  return (
    <main>
      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-header">
          <h2>This Week's Specials!</h2>
          <a href="/menu" className="menu-button">
            Online Menu
          </a>
        </div>
        <div className="specials-cards">
          <div className="card">
            <img src={greekSalad} alt="Greek Salad" className="card-image" />
            <div className="card-content">
              <div className="card-title">
                <h3>Greek Salad</h3>
                <p className="price">$12.99</p>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="/order" className="order-link">
                <span>Order a delivery</span>
                <DeliveryIcon />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={bruchetta} alt="Bruschetta" className="card-image" />
            <div className="card-content">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <p className="price">$15.99</p>
              </div>
              <p className="card-description">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="/order" className="order-link">
                <span>Order a delivery</span>
                <DeliveryIcon />
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={lemonDessert}
              alt="Lemon Dessert"
              className="card-image"
            />
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <p className="price">$5.00</p>
              </div>
              <p className="card-description">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="/order" className="order-link">
                <span>Order a delivery</span>
                <DeliveryIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p className="rating">★★★★☆</p>
            <div className="customer-info">
              {/* <img src={testimonial1} alt="Customer 1" /> */}
              <p>Sarah L.</p>
            </div>
            <p className="review">
              "The food was absolutely wonderful, from preparation to
              presentation, very pleasing."
            </p>
          </div>
          <div className="testimonial-card">
            <p className="rating">★★★★★</p>
            <div className="customer-info">
              {/* <img src={testimonial2} alt="Customer 2" /> */}
              <p>John D.</p>
            </div>
            <p className="review">
              "Little Lemon is my go-to spot for a delicious and authentic
              Mediterranean meal."
            </p>
          </div>
          <div className="testimonial-card">
            <p className="rating">★★★★☆</p>
            <div className="customer-info">
              {/* <img src={testimonial1} alt="Customer 3" /> */}
              <p>Emily R.</p>
            </div>
            <p className="review">
              "I love the cozy atmosphere and the friendly staff. A true gem in
              Chicago!"
            </p>
          </div>
          <div className="testimonial-card">
            <p className="rating">★★★★★</p>
            <div className="customer-info">
              {/* <img src={testimonial2} alt="Customer 4" /> */}
              <p>Michael B.</p>
            </div>
            <p className="review">
              "The lemon dessert is a must-try! It's the perfect end to a
              perfect meal."
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials. We
            are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <div className="about-images">
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
        </div>
      </section>
    </main>
  );
}

export default Main;
