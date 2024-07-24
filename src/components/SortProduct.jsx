import React from "react";
import { useFilterContext } from "../context/FilterContext";

const SortProduct = () => {
  const { all_products, sortingProductData } = useFilterContext();

  const length = all_products.length;

  return (
    <div className=" flex items-center justify-between w-9/12  ">
      <div className="font-semibold text-sm md:text-lg">
        <span className="mx-2 ">Total Products</span>
        {length}
      </div>
      <div>
        <select
          id="sortProduct"
          className="my-3 border px-2 py-3"
          onChange={() => sortingProductData()}
        >
          <option value="lowest">Price (lowest)</option>
          <option value="highest">Price (highest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default SortProduct;
