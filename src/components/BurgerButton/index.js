import React from "react";
import "./styles.scss";

const BurgerButton = ({ handleMenuAction }) => {
  return (
    <div className="responsive-menu" onClick={handleMenuAction}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default BurgerButton;
