import React from "react";
import Navbar from "./Navbar";
import Hero from "../pages/Hero";

const Home = () => {
  const titleFirst = "Find Your";
  const titleSecond = " Perfect Pair";
  const description =
    "Discover the latest trends in footwear, designed for both comfort and style. Step into a world where fashion meets function, and find your perfect pair today!";
  return (
    <div>
      <Hero
        titleFirst={titleFirst}
        titleSecond={titleSecond}
        description={description}
      />
    </div>
  );
};

export default Home;
