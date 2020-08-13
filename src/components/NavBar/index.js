import React from "react";
import "./styles.scss";
import Logo from "components/Logo";
import Menu from "components/Menu";
import BurgerButton from "components/BurgerButton";
import Phone from "components/Phone";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-content">
        <Logo />
        <Menu />
        <Phone />
        <BurgerButton />
      </div>
    </nav>
  );
};

export default NavBar;
