import React from "react";
import pizza from "assets/img/pizza-card.jpg";
import "./styles.scss";

const PizzaCard = ({ data }) => {
  return (
    <div className="pizza-card">
      <img src={pizza} alt="pizza" />
      <h3 className="pizza-card-title">{data.title}</h3>
      <h2 className="pizza-card-price">$ {data.price}</h2>
      <button className="btn">order now</button>
    </div>
  );
};

export default PizzaCard;
