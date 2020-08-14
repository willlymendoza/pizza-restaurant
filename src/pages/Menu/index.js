import React, { useState, useEffect } from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import MenuCard from "components/MenuCard";
import MenuNavBarItem from "./MenuNavBarItem";
import pizzaImg from "assets/img/menu-pizza.jpg";
import pastaImg from "assets/img/menu-pasta.jpg";
import saladImg from "assets/img/menu-salad.jpg";
import dessertImg from "assets/img/menu-dessert.jpg";

const menuAllData = [
  {
    id: 1,
    title: "Pizza 1",
    category: "pizza",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 2,
    title: "Pizza 2",
    category: "pizza",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 3,
    title: "Pizza 3",
    category: "pizza",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 4,
    title: "Pizza 4",
    category: "pizza",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 5,
    title: "Pasta 1",
    category: "pasta",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 6,
    title: "Pasta 2",
    category: "pasta",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 7,
    title: "Pasta 3",
    category: "pasta",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 8,
    title: "Pasta 4",
    category: "pasta",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 9,
    title: "Salad 1",
    category: "salads",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 10,
    title: "Salad 2",
    category: "salads",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 11,
    title: "Salad 3",
    category: "salads",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 12,
    title: "Salad 4",
    category: "salads",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 13,
    title: "Dessert 1",
    category: "desserts",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 14,
    title: "Dessert 2",
    category: "desserts",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 15,
    title: "Dessert 3",
    category: "desserts",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 16,
    title: "Dessert 4",
    category: "desserts",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
];

const navItems = [
  { id: 1, name: "all" },
  { id: 2, name: "pizza" },
  { id: 3, name: "pasta" },
  { id: 4, name: "salads" },
  { id: 5, name: "desserts" },
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
