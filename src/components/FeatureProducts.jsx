import React from "react";
import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import ConvertCurrency from "../components/CurrencyConvert";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    // console.log("product id",id);
    navigate(`/singleProducts/${id}`);
  };
  // console.log("feature products",featureProducts);
  return (
    <>
      {isLoading ? (
        <h1 className="text-center text-3xl text-black">Loading...</h1>
      ) : (
        <section className="text-gray-900 flex flex-col items-center px-5 py-24 md:my-10 bg-[#f3f3f3]">
          <div className="flex items-center  flex-col   mb-10  ">
            <h1 className="text-lg md:text-2xl text-center font-semibold font-poppins ">
              Our Feature Services
            </h1>
          </div>
          <div className="flex w-full  xl:w-3/4 flex-wrap gap-5  items-center justify-center  -m-4">
            {featureProducts.map((product) => {
              const { id, title, price, image, category } = product;
              return (
                <div
                  onClick={() => handleProductClick(id)}
                  key={id}
                  className="font-poppins  cursor-pointer md:w-72 lg:w-[20rem] py-3 md:p-4 w-72"
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
                  <div className="flex w-full items-center justify-between mt-2">
                    <h3 className="text-gray-900 font-semibold text-sm md:text-base tracking-widest mb-1">
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
        </section>
      )}
    </>
  );
};

export default FeatureProducts;
