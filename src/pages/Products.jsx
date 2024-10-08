import React from "react";
import FilterProduct from "../components/FilterProduct";
import ProductList from "../components/ProductList";
import SortProduct from "../components/SortProduct";

const Products = () => {
  return (
    <div className="mt-32 flex flex-col md:flex-row justify-center  p-9">
      <div className="w-full md:w-3/12  ">
        <FilterProduct />
      </div>
      <div className=" flex flex-col items-center   w-full md:w-9/12  ">
        <SortProduct />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
