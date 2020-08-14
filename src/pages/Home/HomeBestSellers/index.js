import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import PizzaCard from "components/PizzaCard";

const pizzaData = [
  { id: 1, title: "Pizza 1", price: 13 },
  { id: 2, title: "Pizza 2", price: 13 },
  { id: 3, title: "Pizza 3", price: 13 },
  { id: 4, title: "Pizza 4", price: 13 },
  { id: 5, title: "Pizza 5", price: 13 },
  { id: 6, title: "Pizza 6", price: 13 },
  { id: 7, title: "Pizza 7", price: 13 },
  { id: 8, title: "Pizza 8", price: 13 },
];

const HomeBestSellers = () => {
  return (
    <section className="best-sellers section">
      <SectionTitle text="best sellers" />

      <div className="best-sellers-content">
        {pizzaData.map((item) => (
          <PizzaCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default HomeBestSellers;
