import React, { useState } from "react";
import { CgClose, CgMenu, CgMenuRightAlt } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [linkBorder, setLinkBorder] = useState("Home");
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState(false);
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
              ? "w-full z-50 h-24 fixed top-0 shadow-[0px_1px_5px_#f03030] bg-white  flex items-center justify-between py-2 px-7 mg:px-12 "
              : "w-full z-50 h-24 fixed top-0 bg-transparent flex items-center justify-between py-2 px-7 mg:px-12"
          }
        >
          <div className="h-full flex flex-col md:flex-row items-center justify-center md:gap-3">
            <img src="./image/logo.svg" className="w-12 md:w-20" alt="logo" />
            <h1 className="text-sm md:text-xl font-bold">
              Classy <span className="text-[#ff0000]"> K</span>icks
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-xl font-baloo font-semibold">
            <Link
              to={"/"}
              onClick={() => handleLinkClick("Home")}
              className={
                linkBorder === "Home"
                  ? "cursor-pointer border-b-[.2rem]  border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              <span>Home</span>
            </Link>
            <Link
              to={"products"}
              onClick={() => handleLinkClick("Product")}
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
              onClick={() => handleLinkClick("About")}
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
              onClick={() => handleLinkClick("Contact")}
              className={
                linkBorder === "Contact"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000] text-gray-500"
              }
            >
              Contact
            </Link>
            <button className="bg-[#f03030] border border-[#f03030] hover:bg-transparent hover:text-black rounded-full w-24 h-10 text-white transition-all duration-500">
              Login
            </button>
            <div className="flex relative">
              <IoCartOutline className="text-2xl " />
              <span className="bg-[#f03030] text-white absolute -top-4 left-4 rounded-full flex items-center justify-center text-base h-6 w-6">
                1
              </span>
            </div>
          </div>
          <div className="cursor-pointer text-xl md:hidden">
            <CgMenu onClick={() => setMenu(true)} />
          </div>
        </div>
      ) : (
        <div
          className={`z-50 fixed -top-[100%] left-0 w-full h-screen justify-center items-center  bg-white flex flex-col   ${
            menu ? "translate-y-full" : "translate-y-0"
          }  duration-500 transition ease-in-out px-7 lg:px-12`}
        >
          <div className="h-20 -mt-36 w-full  flex items-center justify-between gap-3">
            <div className="flex  flex-col items-center">
              <img src="./image/logo.svg" className="w-16 md:w-20" alt="logo" />
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
              onClick={() => handleLinkClick("Home")}
              className={
                linkBorder === "Home"
                  ? `  cursor-pointer border-b-[.2rem]  border-[#ff0000] `
                  : "hover:text-[#e60000]"
              }
            >
              <span>Home</span>
            </Link>
            <Link
              to={"products"}
              onClick={() => handleLinkClick("Product")}
              className={
                linkBorder === "Product"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000]"
              }
            >
              Product
            </Link>
            <Link
              to={"/about"}
              onClick={() => handleLinkClick("About")}
              className={
                linkBorder === "About"
                  ? " cursor-pointer border-b-[.2rem] border-[#ff0000] "
                  : "hover:text-[#e60000]"
              }
            >
              About
            </Link>
            <Link
              to={"/contact"}
              onClick={() => handleLinkClick("Contact")}
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
            <div className="flex relative">
              <IoCartOutline className="text-2xl " />
              <span className="bg-[#f03030] text-white absolute -top-4 left-4 rounded-full flex items-center justify-center text-base h-6 w-6">
                1
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
    </>
  );
};

export default Navbar;
