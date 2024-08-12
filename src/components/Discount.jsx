import React from "react";

const Discount = () => {
  return (
    <div className="relative py-20 w-full h-96">
      <img
        src="/image/discountimage.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Discount"
      />
      <div className="absolute inset-0 bg-[#ffffff] opacity-50"></div>
      <div className="relative z-10 text-black flex flex-col items-center justify-center  h-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Unlock Exclusive Savings!</h1>
        <p className="text-base px-5 md:text-xl mt-4 font-semibold">
          Discover limited-time discounts and special offers on your favorite
          products.
        </p>
        <div className="text-base font-semibold my-4">
          <button className="bg-[#f03030] border border-[#f03030]  text-sm md:text-base hover:bg-transparent hover:text-black hover:border-[#f03030]  rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
