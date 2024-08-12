import React from "react";

const NewCollection = () => {
  return (
    <div className="py-20 w-full h-full font-poppins flex flex-col md:flex-row gap-7 px-7 items-center justify-center">
      <div className="w-full sm:w-5/6 md:w-2/4  flex flex-col items-center md:items-end ">
      <span className=" w-full text-center md:text-start   lg:w-[33.5rem]">

        <h1 className="text-xl  md:text-3xl lg:text-4xl md:w-72 font-semibold md:font-bold mb-5 text-black">See Our New Collection</h1>
      </span>
        <img  className="rounded-lg w-[23rem]  opacity-90 lg:w-[33.5rem]  " src="/image/NewCollection.jpg" alt="New Collection" />
      </div>
      <div className="w-full sm:w-5/6 md:w-2/4  flex flex-col  items-center md:items-start">
        <img className="rounded-lg w-[23rem] opacity-90 lg:w-[33.5rem] "  src="/image/NewCollectionImg.jpg" alt="New Collection" />
        <p className="text-sm md:text-lg text-center md:text-start text-gray-500 w-full lg:w-[33.5rem] mt-5">
          Discover our new collection now! Experience fresh styles and designs,
          perfect for updating your wardrobe with the latest trends
        </p>
        <div className="text-base font-semibold my-2">
          <button className="bg-white  border border-[#f03030]  text-sm md:text-base hover:bg-[#f03030]  hover:border-[#f03030]  rounded-full h-10 w-24 md:w-32  md:h-12 text-black transition-all duration-500">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
