import React, { useState } from "react";
import "./styles.scss";
import Logo from "components/Logo";
import Menu from "components/Menu";
import BurgerButton from "components/BurgerButton";
import Phone from "components/Phone";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuAction = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-content">
        <Logo />
        <Menu handleMenuAction={handleMenuAction} isMenuOpen={isMenuOpen} />
        <Phone />
        <BurgerButton handleMenuAction={handleMenuAction} />
      </div>
    </nav>
  );
};

export default NavBar;
