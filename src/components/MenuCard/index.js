import React from "react";
import "./styles.scss";
import pizza from "assets/img/pizza2.jpg";

const MenuCard = ({ data }) => {
  return (
    <div className="menu-card scale-up-center">
      <img src={pizza} alt="pizza-menu" />
      <div className="menu-card-content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      <span className="menu-card-price">${data.price}</span>
    </div>
  );
};

export default MenuCard;
