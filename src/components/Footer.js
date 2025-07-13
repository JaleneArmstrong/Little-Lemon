import React from "react";
// import logo from "../assets/footer-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* <div className="footer-logo">
        <img src={logo} alt="Little Lemon - Secondary Logo" />
      </div> */}

      <div className="footer-nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <address>
          123 Lemon Grove Lane
          <br />
          Chicago, IL 60601
          <br />
          USA
        </address>
        <p>
          <a href="tel:+13125551234">(312) 555-1234</a>
        </p>
        <p>
          <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
        </p>
      </div>

      <div className="footer-social">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
