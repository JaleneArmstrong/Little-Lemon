import React from "react";
import "../../Main.css";
import Card from "../highlights/HighlightsCard";
import greekSalad from "../../../assests/specials/greek salad.jpg";
import bruchetta from "../../../assests/specials/bruchetta.svg";
import lemonDessert from "../../../assests/specials/lemon dessert.jpg";

const specials = [
  {
    imageSrc: greekSalad,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    imageSrc: bruchetta,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    imageSrc: lemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Highlights() {
  return (
    <section className="highlights-section">
      <header className="highlights-header">
        <h2>This Week's Specials!</h2>
        <a href="/menu" className="menu-button">
          Online Menu
        </a>
      </header>
      <ul className="specials-cards">
        {specials.map((special) => (
          <li key={special.title}>
            <Card
              imageSrc={special.imageSrc}
              title={special.title}
              price={special.price}
              description={special.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
