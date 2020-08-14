import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import MenuCard from "components/MenuCard";
import pizzaImg from "assets/img/menu-pizza.jpg";
import pastaImg from "assets/img/menu-pasta.jpg";
import saladImg from "assets/img/menu-salad.jpg";
import dessertImg from "assets/img/menu-dessert.jpg";

const menuData = [
  {
    id: 1,
    title: "Pizza 1",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 2,
    title: "Pizza 2",
    img: pizzaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 3,
    title: "Pasta 1",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 4,
    title: "Pasta 2",
    img: pastaImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 5,
    title: "Salad 1",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 6,
    title: "Salad 2",
    img: saladImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 7,
    title: "Dessert 1",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 8,
    title: "Dessert 2",
    img: dessertImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
];

const HomeTodaysMenu = () => {
  return (
    <section className="todays-menu section">
      <SectionTitle text="today's menu" />

      <div className="menu-content">
        {menuData.map((item) => (
          <MenuCard key={item.id} data={item} />
        ))}
      </div>

      <div className="todays-menu-footer">
        <a className="btn" href="/">
          see our menu
        </a>
      </div>
    </section>
  );
};

export default HomeTodaysMenu;
