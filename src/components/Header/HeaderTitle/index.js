import React from "react";
import "./styles.scss";

const HeaderTitle = ({ data }) => {
  return (
    <div className="header-title">
      <h1>{data.title}</h1>

      {data.menu ? (
        <a className="btn" href="/">
          see today's menu
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderTitle;
