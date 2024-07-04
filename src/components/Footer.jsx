import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div></div>
      <div className="w-full h-full bg-[#000000] flex flex-col  items-center  px-5 py-20 gap-4 font-poppins text-white mt-16">
        <div className="flex flex-col md:flex-row   gap-12 md:gap-6 justify-center items-center ">
          <div className=" sm:w-2/3  md:w-[27rem]  ">
            <h1 className="text-center md:text-start text-md md:text-2xl md:font-bold">Classy Kicks</h1>
            <p className="text-center md:text-start text-xs md:text-base text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
              voluptate quidem magni, blanditiis magnam quisquam dolore hic
              eaque, voluptatem qui similique architecto in laudantium!
              Quibusdam laudantium officia iusto adipisci.
            </p>
          </div>
          <div className="    flex flex-col md:flex-row gap-3 md:gap-12">
            <div className=" w-full lg:w-56 flex md:flex-col justify-center items-center gap-2 md:gap-3 font-semibold text-gray-400 text-sm md:text-lg ">
              <Link
                className="cursor-pointer hover:border-b-2 hover:border-white"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer hover:border-b-2 hover:border-white"
                to={"/products"}
              >
                Product
              </Link>
              <Link
                className="cursor-pointer hover:border-b-2 hover:border-white"
                to={"/about"}
              >
                About
              </Link>
              <Link
                className="cursor-pointer hover:border-b-2 hover:border-white"
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className=" w-full lg:w-56 flex md:flex-col text-2xl md:text-3xl gap-5 justify-center  items-center ">
              <div className="flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
              <div className="text-base font-semibold my-4">
                <button className="bg-[#ffffff] border border-[#ffffff] hover:border-black text-xs md:text-base hover:bg-black hover:text-white rounded-full h-10 w-24 md:w-32  md:h-12 text-black transition-all duration-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-5/6 lg:md:w-3/6 my-5" />
        <div>
          <p className="text-[.84rem] md:text-base text-gray-400 flex items-center gap-3">
            <FaRegCopyright />{" "}
            <span>
              {new Date().getFullYear()} Classy Kicks. All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
