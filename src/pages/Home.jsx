import React, { useEffect } from "react";
import Hero from "../common/Hero";
import Services from "../components/Services";
import TrustedCompanies from "../components/TrustedCompanies";
import FeatureProducts from "../components/FeatureProducts";
import Discount from "../components/Discount";

const Home = () => {
  const titleFirst = "Find Your";
  const titleSecond = " Perfect Pair";
  const description =
    "Discover the latest trends in footwear, designed for both comfort and style. Step into a world where fashion meets function, and find your perfect pair today!";

  

  return (
    <div className="flex flex-col ">
      <Hero
        titleFirst={titleFirst}
        titleSecond={titleSecond}
        description={description}
      />

      <FeatureProducts />
      {/* <Services /> */}
      <Discount />
      <TrustedCompanies />
    </div>
  );
};

export default Home;
