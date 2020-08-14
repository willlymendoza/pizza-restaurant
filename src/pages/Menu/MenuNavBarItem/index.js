import React from "react";

const MenuNavBarItem = ({ selectedCategory, setSelectedCategory, name }) => {
  return (
    <span
      className={`menu-nav-bar-item ${
        selectedCategory === name ? "active" : ""
      }`}
      onClick={() => setSelectedCategory(name)}
    >
      {name}
    </span>
  );
};

export default MenuNavBarItem;
