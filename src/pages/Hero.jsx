import React, { useState } from "react";
// import redImage from './image/redShoesHero.svg'
// import greenImage from './image/greenShoesHero.svg'
// import blueImage from './image/blueShoesHero.svg'

const Hero = () => {
  return (
    <div className="relative px-5  w-full h-screen  flex items-center justify-center ">
      <img
        className="absolute  opacity-70 h-full w-full"
        src="./image/1bg.jpg"
        alt=""
      />
      <div className="relative flex flex-col justify-center items-center sm:items-start  font-poppins sm:max-lg:pl-11 font-bold sm:w-3/5 lg:w-2/5 ">
        <h1 className="text-3xl md:text-4xl lg:text-7xl">Find Your </h1>
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-[#ff0000]">Perfect Pair </h1>
        <p className="text-xs md:text-base mt-2 text-center sm:text-start">
          Discover the latest trends in footwear, designed for both comfort and
          style. Step into a world where fashion meets function, and find your
          perfect pair today!
        </p>
        <div className="text-base font-semibold my-4">
          <button className="bg-[#000000] border border-[#000000] text-xs md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative hidden sm:flex items-center justify-center ">
        <img
          className="w-56 md:w-3/5 lg:w-2/3"
          src="./image/redShoesHero.svg"
          alt="hero section image"
        />
        {/* <img src="./image/greenShoesHero.svg" alt="hero section image" /> */}
        {/* <img src="./image/blueShoesHero.svg" alt="hero section image" /> */}
      </div>
    </div>
  );
};

export default Hero;
