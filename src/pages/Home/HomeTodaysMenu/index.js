import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import MenuCard from "components/MenuCard";

const menuData = [
  {
    id: 1,
    title: "Pizza 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 2,
    title: "Pizza 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 3,
    title: "Pizza 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 4,
    title: "Pizza 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 5,
    title: "Pizza 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 6,
    title: "Pizza 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 7,
    title: "Pizza 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
  {
    id: 8,
    title: "Pizza 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
    price: 12,
  },
];

const HomeTodaysMenu = () => {
  return (
    <section className="todays-menu">
      <SectionTitle text="today's menu" />

      <div className="menu-content">
        {menuData.map((item) => (
          <MenuCard key={item.id} data={item} />
        ))}
      </div>

      <div className="todays-menu-footer">
        <a className="btn" href="">
          see our menu{" "}
        </a>
      </div>
    </section>
  );
};

export default HomeTodaysMenu;
