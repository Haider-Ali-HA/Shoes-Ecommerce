import React from "react";
import FilterProduct from "../components/FilterProduct";
import ProductList from "../components/ProductList";
import SortProduct from "../components/SortProduct";

const Products = () => {
  
  // console.log("all products data", all_products);
  return (
    <div className="mt-20 flex flex-col md:flex-row justify-center border">
      <div className="w-full md:w-1/5 border border-black">
        <FilterProduct />
      </div>
      <div className=" flex flex-col items-center justify-center w-full md:w-4/5 border border-red-500">
        <SortProduct />
        <ProductList  />
      </div>
    </div>
  );
};

export default Products;
