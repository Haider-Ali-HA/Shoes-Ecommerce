import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Footer = () => {
  const name = useProductContext();
  console.log(name);
  return (
    <>
      <div className="w-full h-full bg-[#000000] flex flex-col  items-center  px-5 py-20 gap-4 font-poppins text-white">
        <div className="flex flex-col md:flex-row   gap-12 md:gap-6 justify-center items-center ">
          <div className=" sm:w-2/3  md:w-[27rem]  ">
            <h1 className="text-center md:text-start text-xl md:text-2xl font-bold text-[#f03030] mb-4">
              Classy Kicks
            </h1>
            <p className="text-center md:text-start text-xs md:text-base text-gray-400">
              {
                "Discover the perfect blend of style and comfort with Classy Kicks. Step confidently with our meticulously crafted footwear designed for every occasion."
              }
            </p>
          </div>
          <div className="    flex flex-col md:flex-row gap-3 md:gap-12">
            <div className=" w-full lg:w-56 flex md:flex-col justify-center items-center gap-2 md:gap-3  text-gray-400 font-semibold text-sm md:text-base ">
              <Link
                className="cursor-pointer border-b-2 border-black hover:border-[#f03030] "
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer border-b-2 border-black hover:border-[#f03030] "
                to={"/products"}
              >
                Product
              </Link>
              <Link
                className="cursor-pointer border-b-2 border-black hover:border-[#f03030] "
                to={"/about"}
              >
                About
              </Link>
              <Link
                className="cursor-pointer border-b-2 border-black hover:border-[#f03030] "
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className=" w-full lg:w-56 flex md:flex-col text-2xl md:text-3xl gap-5 justify-center  items-center ">
              <div className="flex gap-3 cursor-pointer text-[#]">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FaFacebook />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
                </Link>
                <Link to="https://www.twitter.com/" target="_blank">
                  <FaTwitter />
                </Link>
              </div>
              <div className="text-base font-semibold my-4">
                <button className="bg-[#f03030] border border-[#f03030]  text-sm md:text-base hover:bg-transparent hover:text-white hover:border-[#f03030]  rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-5/6 lg:md:w-3/6 my-5" />
        <div>
          <p className="text-sm md:text-base text-gray-400 flex items-center gap-3">
            <FaRegCopyright />
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
