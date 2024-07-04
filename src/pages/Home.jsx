import React from "react";
import Hero from "../common/Hero";
import Services from "../components/Services";
import TrustedCompanies from "../components/TrustedCompanies";

const Home = () => {
  const titleFirst = "Find Your";
  const titleSecond = " Perfect Pair";
  const description =
    "Discover the latest trends in footwear, designed for both comfort and style. Step into a world where fashion meets function, and find your perfect pair today!";
  return (
    <div className="flex flex-col gap-20">
      <Hero
        titleFirst={titleFirst}
        titleSecond={titleSecond}
        description={description}
      />
      <Services />
      <TrustedCompanies />
    </div>
  );
};

export default Home;
