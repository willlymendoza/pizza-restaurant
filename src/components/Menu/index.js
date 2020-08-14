import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Menu = ({ handleMenuAction, isMenuOpen }) => {
  return (
    <div className={`nav-bar-menu ${isMenuOpen ? "open" : ""}`}>
      <NavLink
        activeClassName="active-menu"
        exact
        to="/"
        onClick={handleMenuAction}
      >
        home
      </NavLink>
      <NavLink
        activeClassName="active-menu"
        to="/about"
        onClick={handleMenuAction}
      >
        about
      </NavLink>
      <NavLink
        activeClassName="active-menu"
        to="/menu"
        onClick={handleMenuAction}
      >
        menu
      </NavLink>
      <NavLink
        activeClassName="active-menu"
        to="/blog"
        onClick={handleMenuAction}
      >
        news
      </NavLink>
      <NavLink
        activeClassName="active-menu"
        to="/contact"
        onClick={handleMenuAction}
      >
        contact
      </NavLink>
    </div>
  );
};

export default Menu;
