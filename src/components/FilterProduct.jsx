import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { IoIosCheckmark } from "react-icons/io";
import CurrencyConvert from "./CurrencyConvert";

const FilterProduct = () => {
  const {
    updateFilterValue,
    filter: { searchValue, selectColor, price, maxPrice, minPrice },
    filter_products,
    ClearFilters,
  } = useFilterContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get unique values
  const getUniqueValue = (allData, value) => {
    let data = allData.map((item) => {
      return item[value];
    });

    if (value === "color") {
      data = data.flat();
    }
    return (data = ["All", ...new Set(data)]);
  };

  const filterCategoryData = getUniqueValue(filter_products, "category");
  const filterCompanyData = getUniqueValue(filter_products, "company");
  const filterColorData = getUniqueValue(filter_products, "color");

  const handleCategoryClick = (e, item) => {
    setSelectedCategory(item);
    updateFilterValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center ">
      {/* filter by name in search field */}
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="searchValue"
            value={searchValue}
            placeholder="Search By Name"
            onChange={(e) => handleCategoryClick(e)}
            className="border p-2"
          />
        </form>
      </div>

      {/* filter by price */}
      <div className="w-52 p-3">
        <h1 className="font-bold text-2xl mb-1">Price</h1>
        <div className="flex flex-col gap-3">
          <span>
            <CurrencyConvert price={price} />
          </span>
          <input
            type="range"
            value={price}
            name="price"
            min={minPrice}
            max={maxPrice}
            onChange={(e) => updateFilterValue(e)}
          />
        </div>
      </div>
      {/* filter by category */}
      <div className=" w-52 p-3 ">
        <h1 className="font-bold text-2xl">Category</h1>
        <ul>
          {filterCategoryData.map((item, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  name="selectCategory"
                  value={item}
                  className={` my-2 ${
                    selectedCategory === item
                      ? " border-b-2 text-[#ff4343] border-[#ff4343]"
                      : "border-b-2 border-white hover:text-[#ff4343]"
                  }`}
                  onClick={(e) => handleCategoryClick(e, item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* filter by company */}
      <div className="w-52 p-3 ">
        <h1 className="font-bold text-2xl">Company</h1>
        <select
          name="selectCompany"
          id="selectColor"
          className="my-3 border px-2 py-3"
          onClick={(e) => handleCategoryClick(e)}
        >
          {filterCompanyData.map((item, index) => {
            return (
              <option
                className="border my-2"
                key={index}
                name="selectCompany"
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>

      {/* filter by Color  */}
      <div className="w-52 p-3 ">
        <h1 className="font-bold mb-3 text-2xl">Color</h1>
        <div className="flex  ">
          {filterColorData?.map((color, index) => {
            return color === "All" ? (
              <button
                name="selectColor"
                value={color}
                type="button"
                onClick={(e) => handleCategoryClick(e)}
                key={index}
                className=" mx-1 hover:opacity-70 cursor-pointer"
              >
                All
              </button>
            ) : (
              <button
                name="selectColor"
                value={color}
                type="button"
                onClick={(e) => handleCategoryClick(e, index)}
                key={index}
                className={`h-4 w-4 md:w-6 md:h-6 border shadow-2xl rounded-full font-bold hover:opacity-70 cursor-pointer flex items-center justify-center text-4xl text-white mx-1`}
                style={{ backgroundColor: color }}
              >
                {color === selectColor ? <IoIosCheckmark /> : ""}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-52">
        <button
          onClick={() => ClearFilters()}
          className="bg-[#000000] border border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-full my-10  md:h-12 text-white transition-all duration-500"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
