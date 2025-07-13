import React from "react";

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

function HighlightsCard({ imageSrc, title, price, description }) {
  return (
    <article className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <header className="card-title">
          <h3>{title}</h3>
          <p className="price">{price}</p>
        </header>
        <p className="card-description">{description}</p>
        <a href="/order" className="order-link">
          <span>Order a delivery</span>
          <DeliveryIcon />
        </a>
      </div>
    </article>
  );
}

export default HighlightsCard;
