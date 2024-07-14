import React, { useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PaginationSingleProduct from "../components/PaginationSingleProduct";
import CurrencyConvert from "../components/CurrencyConvert";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Step 1: State to track active image index

  const {
    title,
    company,
    price,
    description,
    category,
    multipleImage,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  const [singleImage, setSingleImage] = useState(image);

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
    <div className="mt-20">
      <PaginationSingleProduct title={title} />

      {isSingleLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <>
          <div className="flex gap-10 items-center border justify-center my-20">
            <div className="flex gap-5 border border-red-500">
              <div className="flex flex-col items-center gap-5 rounded ">
                {multipleImage?.map((imageUrl, index) => {
                  return (
                    <img
                      onClick={() => handleImageClick(imageUrl.img, index)} // Pass index to handleImageClick
                      key={index}
                      src={imageUrl.img}
                      alt={`${title} ${index + 1}`}
                      className={`w-32 rounded cursor-pointer ${
                        index === activeImageIndex
                          ? "border-4 border-red-500"
                          : ""
                      }`} // Step 3: Conditional styling
                    />
                  );
                })}
              </div>
              <div className=" flex  items-center">
                <img className="w-[22rem]" src={singleImage} alt="" />
              </div>
            </div>
            <div className="border border-blue-500 w-2/4">
              <h2 className="text-4xl font-semibold mb-4">{title}</h2>
              <div className="flex flex-col gap-4">
                <p>
                  <span>stars{stars}</span>
                  <span>({reviews} customer reviews)</span>
                </p>
                <p>
                  MRP:
                  <span className="line-through font-semibold ml-2">
                    {<CurrencyConvert price={price + 2500} />}
                  </span>
                </p>
                <p className="text-[#ff4343]">
                  Deal of the Day :
                  <span
                    className="font-semibold ml-2
                  "
                  >
                    {<CurrencyConvert price={price} />}
                  </span>
                </p>
                <p className="w-2/4">{description}</p>
              </div>
              <div className="flex gap-7 items-center my-2">
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <TbTruckDelivery className="text-2xl" />
                  </span>
                  <p className="text-sm">Free Delivery</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <MdSecurity className="text-2xl" />
                  </span>
                  <p className="text-sm">30 Days Replacement</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <GiReceiveMoney className="text-2xl" />
                  </span>
                  <p className="text-sm">Cash on Delivery</p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <RiSecurePaymentLine className="text-2xl" />
                  </span>
                  <p className="text-sm">Secure Payment</p>
                </span>
              </div>
              <hr className="w-full h-2 mb-2" />
              <div>
                <p>
                  Available:
                  <span className="font-semibold ml-2">
                    {stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  id:
                  <span className="font-semibold ml-2">{id}</span>
                </p>
                <p>
                  Brand:
                  <span className="font-semibold ml-2">{company}</span>
                </p>
              </div>
              <hr className="w-full h-4" />
              <div>
                <h3>Colors:</h3>
                <span className="bg-red-500 h-8 w-8 rounded-full"></span>
                <span className="bg-blue-500 h-8 w-8 rounded-full"></span>
                <span className="bg-green-500 h-8 w-8 rounded-full"></span>
                <span className="bg-yellow-500 h-8 w-8 rounded-full"></span>
              </div>
              <div>
                <input type="number" className="bg-gray-100 p-2 h-7 w-24" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
