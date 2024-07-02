import React from "react";
import Hero from "../pages/Hero";

const About = () => {
  const titleFirst = "Elevate Your Style";
  const titleSecond = "Step by Step";
  const description =
    "At Classy Kicks, we combine timeless elegance with modern innovation to offer stylish and comfortable footwear. Explore our story and discover how we strive to create the perfect pair for every stride.";
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

export default About;
