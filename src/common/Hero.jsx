import React from "react";

const Hero = ({ titleFirst, titleSecond, description }) => {
  return (
    <div className="relative top-5  px-5  w-full h-screen  flex items-center justify-center ">
      <img
        className="absolute  opacity-70 h-full w-full"
        src="/image/bg.jpg"
        alt="background image"
      />
      <div className="relative flex flex-col justify-center items-center sm:items-start  font-poppins sm:max-lg:pl-11 font-bold sm:w-3/5 lg:w-2/5 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">{titleFirst} </h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-[#ff0000]">
          {titleSecond}
        </h1>
        <p className="text-sm md:text-base mt-2 text-center sm:text-start">
          {description}
        </p>
        <div className="text-base font-semibold my-4">
          <button className="bg-[#000000] border border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative hidden sm:flex items-center justify-center ">
        <img
          className="w-56 md:w-3/5 lg:w-2/3"
          src="/image/redShoesHero.svg"
          alt="hero section image"
        />
       
      </div>
    </div>
  );
};

export default Hero;
