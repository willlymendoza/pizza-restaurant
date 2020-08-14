import React from "react";
import "./styles.scss";

const BurgerButton = ({ handleMenuAction }) => {
  return (
    <div className="responsive-menu">
      <i className="fas fa-bars" onClick={handleMenuAction}></i>
    </div>
  );
};

export default BurgerButton;
