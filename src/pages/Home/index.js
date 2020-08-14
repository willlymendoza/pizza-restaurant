import React, { Fragment } from "react";
import HomeStory from "./HomeStory";
import HomeBestSellers from "./HomeBestSellers";

const Home = () => {
  return (
    <Fragment>
      <HomeStory />
      <HomeBestSellers />
    </Fragment>
  );
};

export default Home;
