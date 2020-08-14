import React from "react";
import "./styles.scss";
import sideImg from "assets/img/pizza-post1.jpg";

const SideBarItem = ({ data }) => {
  return (
    <div className="side-bar-item">
      <div className="side-bar-item-img">
        <img src={sideImg} alt="pizza-post1" />
      </div>

      <div className="side-bar-item-content">
        <h3 className="side-bar-item-content-category">{data.category}</h3>
        <h2 className="side-bar-item-content-title">{data.title}</h2>
        <span className="side-bar-item-content-date">{data.date} </span>
      </div>
    </div>
  );
};

export default SideBarItem;
