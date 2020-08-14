import React, { Fragment } from "react";
import HomeStory from "./HomeStory";
import HomeBestSellers from "./HomeBestSellers";
import HomeTodaysMenu from "./HomeTodaysMenu";

const Home = () => {
  return (
    <Fragment>
      <HomeStory />
      <HomeBestSellers />
      <HomeTodaysMenu />
    </Fragment>
  );
};

export default Home;
