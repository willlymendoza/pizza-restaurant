import React, { useState, useEffect } from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import MenuCard from "components/MenuCard";
import MenuNavBarItem from "./MenuNavBarItem";

const menuAllData = [
  {
    id: 1,
    title: "Pizza 1",
    category: "pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 2,
    title: "Pizza 2",
    category: "pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 3,
    title: "Pizza 3",
    category: "pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 4,
    title: "Pizza 4",
    category: "pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 5,
    title: "Pasta 1",
    category: "pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 6,
    title: "Pasta 2",
    category: "pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 7,
    title: "Pasta 3",
    category: "pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 8,
    title: "Pasta 4",
    category: "pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 9,
    title: "Salad 1",
    category: "salads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 10,
    title: "Salad 2",
    category: "salads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 11,
    title: "Salad 3",
    category: "salads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 12,
    title: "Salad 4",
    category: "salads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 13,
    title: "Desert 1",
    category: "deserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 14,
    title: "Desert 2",
    category: "deserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 15,
    title: "Desert 3",
    category: "deserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 16,
    title: "Desert 4",
    category: "deserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
];

const navItems = [
  { id: 1, name: "all" },
  { id: 1, name: "pizza" },
  { id: 1, name: "pasta" },
  { id: 1, name: "salads" },
  { id: 1, name: "deserts" },
];

const Menu = () => {
  const [menuData, setMenuData] = useState(menuAllData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (selectedCategory === "all") {
      setMenuData(menuAllData);
    } else {
      setMenuData(
        menuAllData.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <section className="menu section">
      <SectionTitle text="our menu" />

      <nav className="menu-nav-bar">
        {navItems.map((item) => (
          <MenuNavBarItem
            key={item.id}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            name={item.name}
          />
        ))}
      </nav>

      <div className="menu-content">
        {menuData.map((item) => (
          <MenuCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
