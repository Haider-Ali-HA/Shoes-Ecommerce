import React, { useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PaginationSingleProduct from "../components/PaginationSingleProduct";
import CurrencyConvert from "../components/CurrencyConvert";
import Stars from "../components/Stars";
import { IoIosCheckmark } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  // Active image index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Destructure the singleProduct object
  const {
    title,
    company,
    price,
    description,
    category,
    color,
    multipleImage,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  // Set the initial image to be displayed
  const [singleImage, setSingleImage] = useState(image);

  // Set the initial color index
  const [productColorIndex, setProductColorIndex] = useState(0);

  // increase or descrease the quantity
  const [Quantity, setQuantity] = useState(1);
  const IncreaseQuantity = () => {
    Quantity > 0 ? setQuantity(Quantity + 1) : setQuantity(1);
  };
  const DecreaseQuantity = () => {
    Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1);
  };

  // Handle color click to set the active color
  const handleColorClick = (index) => {
    setProductColorIndex(index);
  };

  //Handle image click to set the active image
  const handleImageClick = (imageUrl, index) => {
    setSingleImage(imageUrl); // Update the main image displayed
    setActiveImageIndex(index); // Step 2: Update the active image index
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);
  useEffect(() => {
    if (image) {
      setSingleImage(image);
    }
  }, [image]);
  return (
    <div className="mt-20 ">
      <PaginationSingleProduct title={title} />

      {isSingleLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-20">
            <div className="flex flex-col-reverse border border-black md:flex-row gap-5 w-ful md:w-[29rem] lg:w-[33rem]">
              <div className="flex md:flex-col items-center justify-center border gap-5 rounded  border-red-500 ">
                {multipleImage?.map((imageUrl, index) => {
                  return (
                    <img
                      onClick={() => handleImageClick(imageUrl.img, index)}
                      key={index}
                      src={imageUrl.img}
                      alt={`${title} ${index + 1}`}
                      className={`w-16 md:w-32 rounded cursor-pointer ${
                        index === activeImageIndex
                          ? "border-4 border-red-500"
                          : ""
                      }`}
                    />
                  );
                })}
              </div>
              <div className=" flex  items-center justify-center border border-black">
                <img className="w-5/6 md:w-[27rem] border border-black" src={singleImage} alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/3 md:px-0 px-10 border border-black">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2  text-sm md:text-base ">
                  <span>
                    <Stars stars={stars} />
                  </span>
                  <span>({reviews} customer reviews)</span>
                </div>

                <p className=" text-sm md:text-base">
                  MRP:
                  <span className="line-through font-semibold ml-2">
                    {<CurrencyConvert price={price + 2500} />}
                  </span>
                </p>
                <p className="text-[#ff4343] font-semibold  text-sm md:text-base">
                  Deal of the Day :
                  <span
                    className=" ml-2 
                  "
                  >
                    {<CurrencyConvert price={price} />}
                  </span>
                </p>
                <p className="w-full  text-sm md:text-base border border-black">{description}</p>
              </div>
              <div className="flex gap-1 md:gap-7 items-center my-2 border border-black">
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <TbTruckDelivery className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">Free Delivery</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <MdSecurity className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">30 Days Replacement</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <GiReceiveMoney className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">Cash on Delivery</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <RiSecurePaymentLine className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">Secure Payment</p>
                </span>
              </div>
              <hr className="border border-black md:w-2/4 h-2 mb-2" />
              <div>
                <p className="md:text-start text-sm md:text-base">
                  <span className="font-semibold ">Available:</span>
                  <span className="ml-2">
                    {stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>

                <p className="my-3  text-sm md:text-base">
                  <span className="font-semibold">Brand:</span>
                  <span className=" ml-2">{company}</span>
                </p>
                <p className="my-3  text-sm md:text-base">
                  <span className="font-semibold">Category:</span>
                  <span className=" ml-2">{category}</span>
                </p>
              </div>
              {/* <hr className="w-full h-4" /> */}
              <div className="flex my-3  text-sm md:text-base">
                <h3 className="font-semibold">Colors:</h3>
                {color?.map((color, index) => {
                  return (
                    <p
                      key={index}
                      className={`h-4 w-4 md:w-6 md:h-6 rounded-full font-bold opacity-50 hover:opacity-100 flex items-center justify-center text-4xl text-white mx-2 ${
                        productColorIndex === index ? "opacity-100" : ""
                      }`} // Apply conditional styling
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(index)} // Update the click handler
                    >
                      {productColorIndex === index ? <IoIosCheckmark /> : ""}
                    </p>
                  );
                })}
              </div>
              <div className="flex items-center gap-3  text-sm md:text-base">
                <h1 className="font-semibold">Quantity : </h1>
                <span
                  className="hover:bg-gray-700 hover:text-white rounded-full p-1"
                  onClick={() => DecreaseQuantity()}
                >
                  <FaMinus />
                </span>
                <span>{Quantity}</span>
                <span
                  className="hover:bg-gray-700 hover:text-white rounded-full p-1"
                  onClick={() => IncreaseQuantity()}
                >
                  <FaPlus />
                </span>
              </div>
              <div className="text-base font-semibold my-4">
                <button className="bg-[#000000] border border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
