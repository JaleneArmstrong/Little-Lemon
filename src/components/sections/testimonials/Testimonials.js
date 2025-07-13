import React from "react";
import "../../Main.css";
import TestimonialCard from "./TestimonialsCard";

import testimonial1 from "../../../assests/testimonials/testimonial1.jpg";
import testimonial2 from "../../../assests/testimonials/testimonial2.jpg";
import testimonial3 from "../../../assests/testimonials/testimonial3.jpg";
import testimonial4 from "../../../assests/testimonials/testimonial4.jpg";

const testimonialsData = [
  {
    rating: "★★★★☆",
    imageSrc: testimonial1,
    name: "Sofia R.",
    review:
      "The food was absolutely wonderful, from preparation to presentation, very pleasing.",
  },
  {
    rating: "★★★★★",
    imageSrc: testimonial2,
    name: "John D.",
    review:
      "Little Lemon is my go-to spot for a delicious and authentic Mediterranean meal.",
  },
  {
    rating: "★★★★☆",
    imageSrc: testimonial3,
    name: "Emily R.",
    review:
      "I love the cozy atmosphere and the friendly staff. A true gem in Chicago!",
  },
  {
    rating: "★★★★★",
    imageSrc: testimonial4,
    name: "Michael B.",
    review:
      "The lemon dessert is a must-try! It's the perfect end to a perfect meal.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <header>
        <h2>What Our Customers Say</h2>
      </header>
      <ul className="testimonials-cards">
        {testimonialsData.map((testimonial) => (
          <li key={testimonial.name}>
            <TestimonialCard
              rating={testimonial.rating}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              review={testimonial.review}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
