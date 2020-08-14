import React from "react";
import "./styles.scss";

const SectionTitle = ({ text }) => {
  return (
    <div className="section-title">
      <i className="fas fa-pizza-slice"></i>
      <h1>{text}</h1>
    </div>
  );
};

export default SectionTitle;
