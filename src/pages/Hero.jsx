import React, { useState } from "react";
// import redImage from './image/redShoesHero.svg'
// import greenImage from './image/greenShoesHero.svg'
// import blueImage from './image/blueShoesHero.svg'

const Hero = () => {
  return (
    <div className="relative  w-full h-screen  flex items-center justify-center gap-44">
      <img
        className="absolute  opacity-70 h-full w-full"
        src="./image/1bg.jpg"
        alt=""
      />
      <div className="inset"></div>
      <div className="relative font-poppins font-bold text-8xl">
        <h1 className="">Find Your </h1>
        <h1 className=" text-[#ff0000]">Perfect Pair </h1>
        <div className="text-base font-semibold my-4">
          <button className="bg-[#000000] border border-[#000000] hover:bg-transparent hover:text-black rounded-full w-32 h-12 text-white transition-all duration-500">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative flex items-center justify-center ">
        <img
          className="duration-500 ease-in-out"
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
