import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <div className="w-full h-full px-5 mb-10 py-10 flex flex-col md:flex-row  items-center justify-center gap-3 md:gap-5">
      <div className="hover:bg-[#ff9b9b] text-xl font-poppins  flex-col gap-3 md:text-2xl h-[13rem] md:h-[17rem] w-full md:w-[25rem] rounded-lg flex items-center justify-center transition-all duration-4500 cursor-pointer bg-[#ebebeb] shadow-[0px_0px_10px_#ebebeb] text-[#d11010]">
        <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
          <TbTruckDelivery />
        </span>
        <h1 className="text-center font-semibold text-black text-base  md:text-lg ">
          Super Fast and Free Delivery
        </h1>
      </div>
      <div className="flex flex-col gap-3 md:gap-5 w-full md:w-72">
        <div className="hover:bg-[#ff9b9b] text-xl font-poppins flex-col gap-3 md:text-2xl h-[13rem] md:h-[8rem] w-full md:w-[18rem] rounded-lg flex items-center justify-center transition-all duration-4500 cursor-pointer bg-[#ebebeb] shadow-[0px_0px_10px_#ebebeb] text-[#d11010]">
          <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
            <MdSecurity />
          </span>
          <h1 className="text-center font-semibold text-black text-base  md:text-lg ">
            Non-contact Shipping
          </h1>
        </div>
        <div className="hover:bg-[#ff9b9b] text-xl font-poppins flex-col gap-3 md:text-2xl h-[13rem] md:h-[8rem] w-full md:w-[18rem] rounded-lg flex items-center justify-center transition-all duration-4500 cursor-pointer bg-[#ebebeb] shadow-[0px_0px_10px_#ebebeb] text-[#d11010]">
          <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
            <GiReceiveMoney />
          </span>
          <h1 className="text-center font-semibold text-black text-base  md:text-lg ">
            Money-back Guranteed
          </h1>
        </div>
      </div>
      <div className="hover:bg-[#ff9b9b] text-xl font-poppins  flex-col gap-3 md:text-2xl h-[13rem] md:h-[17rem] w-full md:w-[25rem] rounded-lg flex items-center justify-center transition-all duration-4500 cursor-pointer bg-[#ebebeb] shadow-[0px_0px_10px_#ebebeb] text-[#d11010]">
        <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
          <RiSecurePaymentLine />
        </span>
        <h1 className="text-center font-semibold text-black text-base  md:text-lg ">
          Super Secure Payment System
        </h1>
      </div>
    </div>
  );
};

export default Services;
