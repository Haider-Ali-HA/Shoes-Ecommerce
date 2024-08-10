import React, { useEffect, useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
const Navbar = () => {
  const { total_items } = useCartContext();
  const [menu, setMenu] = useState(false);
  const [linkBorder, setLinkBorder] = useState("Home");
  const [color, setColor] = useState(false);

  const location = useLocation();

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleLinkClick = (linkName) => {
    setLinkBorder(linkName);
    setMenu(false); // Assuming you want to set it to false, not 'false' as a string
  };

  const pathToLinkName = {
    "/": "Home",
    "/products": "Product",
    "/about": "About",
    "/contact": "Contact",
  };

  const currentPath = location.pathname; // Extract the path

  const linkName = pathToLinkName[currentPath]; // Map path to link name

  useEffect(() => {
   if (linkName) {
      setLinkBorder(linkName);
    } else {
      setLinkBorder(""); // Clear the border if the path is not in the object
    }
 
  }, [currentPath]); // Run this effect when the path changes

  return (
    <>
      {/* 
      if menu is false then Desktop Navbar 
      else Mobile Navbar
       */}
      {menu === false ? (
        <div
          className={
            color
              ? "w-full z-50 md:h-24 fixed top-0  shadow-[0px_1px_5px_#f03030] bg-white  flex items-center justify-between py-2 px-7 mg:px-12 "
              : "w-full z-50 md:h-24 mt-10 fixed  -top-10 bg-transparent flex items-center justify-between py-2 px-7 mg:px-12"
          }
        >
          <div className="h-full flex flex-col md:flex-row items-center justify-center md:gap-3">
            <img src="/image/logo.svg" className="w-12 md:w-20" alt="logo" />
            <h1 className="text-sm md:text-xl font-bold">
              Classy <span className="text-[#ff0000]"> K</span>icks
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-lg font-baloo font-semibold">
            <Link
              to={"/"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "Home"
                  ? "cursor-pointer border-b-[.2rem]  border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              <span>Home</span>
            </Link>
            <Link
              to={"/products"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "Product"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              Product
            </Link>
            <Link
              to={"/about"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "About"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              About
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "Contact"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              Contact
            </Link>
            {/* <button className="bg-[#f03030] border border-[#f03030] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full w-24 h-10 text-white transition-all duration-500">
              Login
            </button> */}
            <div className="text-base font-semibold my-4">
              <button className="bg-[#f03030] border border-[#f03030]  text-sm md:text-base hover:bg-transparent hover:text-black hover:border-[#f03030]  rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
                Login
              </button>
            </div>
            <div className="flex relative">
              <Link to="/cart" className="cursor-pointer ">
                <IoCartOutline className="text-2xl " />
                <span className="bg-[#f03030] text-white absolute -top-4 left-4 rounded-full flex items-center justify-center text-base h-6 w-6">
                  {total_items}
                </span>
              </Link>
            </div>
          </div>
          <div className="cursor-pointer text-xl md:hidden">
            <CgMenu onClick={() => setMenu(true)} />
          </div>
        </div>
      ) : (
        <div
          className={`z-50 fixed -top-[100%] left-0 w-full h-full justify-center items-center  bg-white flex flex-col   ${
            menu ? "translate-y-full" : "translate-y-0"
          }  duration-500 transition ease-in-out px-7 lg:px-12`}
        >
          <div className="h-20 -mt-72 w-full  flex items-center justify-between gap-3">
            <div className="flex  flex-col items-center">
              <img src="/image/logo.svg" className="w-12 md:w-20" alt="logo" />
              <h1 className="text-base md:text-xl font-bold">
                Classy <span className="text-[#ff0000]"> K</span>icks
              </h1>
            </div>
            <div className=" text-xl    cursor-pointer">
              <CgClose onClick={() => setMenu(false)} />
            </div>
          </div>

          <div className="flex flex-col  items-center gap-5 md:gap-9 md:text-xl font-baloo font-semibold">
            <Link
              to={"/"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "Home"
                  ? `  cursor-pointer border-b-[.2rem]  border-[#ff0000] `
                  : "hover:text-[#e60000]"
              }
            >
              <span>Home</span>
            </Link>
            <Link
              to={"/products"}
              onClick={() => setMenu(false)}
              className={
                linkBorder === "Product"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000]"
              }
            >
              Product
            </Link>
            <Link
              onClick={() => setMenu(false)}
              to={"/about"}
              className={
                linkBorder === "About"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000]"
              }
            >
              About
            </Link>
            <Link
              onClick={() => setMenu(false)}
              to={"/contact"}
              className={
                linkBorder === "Contact"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000]"
              }
            >
              Contact
            </Link>
            <button className="bg-[#f03030] border border-[#f03030] hover:bg-transparent hover:text-black rounded-full w-24 h-10 text-white transition-all duration-500">
              Login
            </button>
            <div className="flex relative ">
              <Link to="/cart" className="cursor-pointer ">
                <IoCartOutline className="text-2xl " />
                <span className="bg-[#f03030] text-white absolute -top-4 left-4 rounded-full flex items-center justify-center text-base h-6 w-6">
                  {total_items}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
