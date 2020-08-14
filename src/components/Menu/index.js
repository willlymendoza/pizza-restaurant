import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="nav-bar-menu">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/menu">menu</NavLink>
      <NavLink to="/blog">news</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  );
};

export default Menu;
