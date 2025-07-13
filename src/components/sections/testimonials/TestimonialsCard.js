import React from "react";

function TestimonialCard({ rating, imageSrc, name, review }) {
  return (
    <figure className="testimonial-card">
      <figcaption>
        <p className="rating">{rating}</p>
        <div className="customer-info">
          <img src={imageSrc} alt={`A portrait of ${name}`} />
          <p>{name}</p>
        </div>
      </figcaption>
      <blockquote className="review">
        <p>"{review}"</p>
      </blockquote>
    </figure>
  );
}

export default TestimonialCard;
