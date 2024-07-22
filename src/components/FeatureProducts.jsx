import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
 
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <section className="text-gray-900 flex flex-col items-center px-5 py-24 my-5 md:my-10 bg-[#f3f3f3]">
          <div className="flex items-center  flex-col   mb-10  ">
            <h1 className="text-lg md:text-2xl text-center font-semibold font-poppins ">
              Our Feature Services
            </h1>
          </div>
          <div className="w-full">

         
           <Product productData={featureProducts} />
          </div>
         
        </section>
      )}
    </>
  );
};

export default FeatureProducts;
