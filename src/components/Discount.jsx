import React from 'react';

const Discount = () => {
  return (
    <div className="relative py-20 w-full h-96">
      <img src="/image/discountimage.svg" className="absolute inset-0 w-full h-full object-cover" alt="Discount" />
      <div className="absolute inset-0 bg-[#f3f3f3] opacity-50"></div>
      <div className="relative z-10 text-black text-center">
        <h1 className="text-4xl font-bold">Discount</h1>
        <p className="text-xl mt-4">Get discount</p>
      </div>
    </div>
  );
};

export default Discount;