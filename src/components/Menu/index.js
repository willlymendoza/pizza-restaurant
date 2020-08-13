import React from "react";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="nav-bar-menu">
      <a href="index.html" className="nav-bar-menu-item">
        home
      </a>
      <a href="about.html" className="nav-bar-menu-item">
        about us
      </a>
      <a href="menu.html" className="nav-bar-menu-item">
        menu
      </a>
      <a href="blog.html" className="nav-bar-menu-item">
        news
      </a>
      <a href="contact.html" className="nav-bar-menu-item">
        contact
      </a>
    </div>
  );
};

export default Menu;
