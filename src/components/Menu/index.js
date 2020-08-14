import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="nav-bar-menu">
      <NavLink activeClassName="active-menu" exact to="/">
        home
      </NavLink>
      <NavLink activeClassName="active-menu" to="/about">
        about
      </NavLink>
      <NavLink activeClassName="active-menu" to="/menu">
        menu
      </NavLink>
      <NavLink activeClassName="active-menu" to="/blog">
        news
      </NavLink>
      <NavLink activeClassName="active-menu" to="/contact">
        contact
      </NavLink>
    </div>
  );
};

export default Menu;
