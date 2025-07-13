import "./Nav.css";
import React from "react";
import logo from "../assests/Logo.svg";

function Nav() {
  return (
    <nav className="nav-container">
      <a href="/" className="nav-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </a>
      <ul className="nav-links">
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
    </nav>
  );
}

export default Nav;
