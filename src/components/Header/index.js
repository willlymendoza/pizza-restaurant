import React, { useEffect, useState } from "react";
import "./styles.scss";
import NavBar from "components/NavBar";
import HeaderTitle from "./HeaderTitle";
import { useLocation } from "react-router-dom";
import homeImg from "assets/img/home.jpg";
import aboutImg from "assets/img/about.jpg";
import menuImg from "assets/img/menu.jpg";
import blogImg from "assets/img/blog.jpg";
import contactImg from "assets/img/contact.jpg";

const pageTitles = [
  { path: "/", title: "pizza & pasta", img: homeImg, menu: true },
  { path: "/about", title: "about us", img: aboutImg },
  { path: "/menu", title: "menu", img: menuImg },
  { path: "/blog", title: "our blog", img: blogImg },
  { path: "/contact", title: "contact", img: contactImg },
];

const Header = () => {
  const [pageTitle, setPageTitle] = useState({});
  const location = useLocation();

  useEffect(() => {
    const data = pageTitles.filter((item) => item.path === location.pathname);
    setPageTitle(data[0]);
  }, [location]);

  return (
    <header className="header" style={{ background: `url(${pageTitle.img})` }}>
      <NavBar />
      <HeaderTitle data={pageTitle} />
    </header>
  );
};

export default Header;
