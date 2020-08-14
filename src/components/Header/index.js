import React from "react";
import "./styles.scss";
import NavBar from "components/NavBar";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <HeaderTitle />
    </header>
  );
};

export default Header;
