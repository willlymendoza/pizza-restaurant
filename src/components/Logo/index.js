import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <i className="fas fa-pizza-slice"></i>
      </NavLink>
    </div>
  );
};

export default Logo;
