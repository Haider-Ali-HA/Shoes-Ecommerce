import React from "react";
import { useNavigate } from "react-router-dom";

import ConvertCurrency from "../components/CurrencyConvert";

const Product = ({ productData }) => {
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    // console.log("product id",id);
    navigate(`/singleProducts/${id}`);
  };
  return (
    <div className="flex w-full  xl:w-3/4 flex-wrap gap-5  items-center justify-center  ">
      {productData.map((product) => {
        const { id, title, price, image, category } = product;
        return (
          <div
            onClick={() => handleProductClick(id)}
            key={id}
            className="font-poppins  cursor-pointer md:w-72 lg:w-[20rem] py-3 h-72 md:p-4 w-72"
          >
            <div className=" relative h-48 rounded overflow-hidden group">
              <img
                alt="ecommerce"
                className="absolute object-cover object-center w-full h-full block transition-transform duration-500 hover:scale-110"
                src={image}
              />
              <p className="bg-white border transition-all duration-500 group-hover:border-[#ff3c3c]  group-hover:bg-[#ff3c3c] group-hover:text-white px-2 py-1 text-sm rounded-full top-5 right-5 absolute text-gray-900">
                {category}
              </p>
            </div>
            <div className="flex w-full  justify-between mt-2">
              <h3 className="text-gray-900 font-semibold  w-52 text-sm md:text-base tracking-widest mb-1">
                {title}
              </h3>
              <h2 className="text-gray-900 title-font text-sm md:text-lg font-medium">
                {<ConvertCurrency price={price} />}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
