import React from "react";

const OurStory = () => {
  return (
    <div className="py-10 md:py-32 w-full h-full px-5 flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center font-poppins">
      <div className="w-[17rem] md:w-[26rem] ">
        <img className=" rounded-lg w-full shadow-2xl" src="/image/OurStoryImg.svg" alt="ourStory image" />
      </div>
      <div className="w-full md:w-2/4 flex flex-col items-center md:items-start">
        <h1 className="font-bold text-xl md:text-3xl w-full md:w-96  text-center md:text-start">Our Commitment To Sneaker Culture</h1>
        <p className="text-center md:text-start text-sm  md:text-base">At Sneak, we are dedicated to nurturing sneaker culture. By offering carefully curated collections and embracing a passion-driven approach, we celebrate cutting-edge style and the worldwide community of sneaker enthusiasts.</p>
        <div className="text-base font-semibold my-4">
          <button className="bg-[#f03030] border border-[#f03030]  text-sm md:text-base hover:bg-transparent hover:text-black hover:border-[#f03030]  rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
