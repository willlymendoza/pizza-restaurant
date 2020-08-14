import React, { useEffect, useState } from "react";
import "./styles.scss";
import NavBar from "components/NavBar";
import HeaderTitle from "./HeaderTitle";
import { useLocation } from "react-router-dom";

const pageTitles = [
  { path: "/", title: "pizza & pasta", menu: true },
  { path: "/about", title: "about us" },
  { path: "/menu", title: "menu" },
  { path: "/blog", title: "our blog" },
  { path: "/contact", title: "contact" },
];

const Header = () => {
  const [pageTitle, setPageTitle] = useState({});
  const location = useLocation();

  useEffect(() => {
    const data = pageTitles.filter((item) => item.path === location.pathname);
    setPageTitle(data[0]);
  }, [location]);

  return (
    <header className="header">
      <NavBar />
      <HeaderTitle data={pageTitle} />
    </header>
  );
};

export default Header;
