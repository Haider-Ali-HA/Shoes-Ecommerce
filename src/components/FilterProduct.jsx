import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterProduct = () => {
  const {
    updateFilterValue,
    filter: { searchValue },

    filter_products,
  } = useFilterContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get unique values
  const getUniqueValue = (allData, value) => {
    let data = allData.map((item) => {
      return item[value];
    });
    return (data = ["All", ...new Set(data)]);
  };

  const filterCategoryData = getUniqueValue(filter_products, "category");
  const filterCompanyData = getUniqueValue(filter_products, "company");

  // console.log("filterCompanyData", filterCompanyData);
  const handleCategoryClick = (e, item) => {
    setSelectedCategory(item); // Update the selected category
    updateFilterValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center ">
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
      <div className=" w-52 p-3 ">
        <h1 className="font-bold text-2xl">Category</h1>
        <ul>
          {filterCategoryData.map((item, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  name="searchCategory"
                  value={item}
                  className={` my-2 ${
                    selectedCategory === item
                      ? " border-b-2 text-[#ff4343] border-[#ff4343]"
                      : "border-b-2 border-white hover:text-[#ff4343]"
                  }`} // Conditionally apply border bottom
                  onClick={(e) => handleCategoryClick(e, item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-52 p-3 ">
        <h1 className="font-bold text-2xl">Company</h1>
        <select name="selectCompany" id="selectCompany" className="my-3 border px-2 py-3"   onClick={(e) => handleCategoryClick(e)}>
          {filterCompanyData.map((item, index) => {
            return (
              <option
                className="border my-2" // Add margin to the option
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
    </div>
  );
};

export default FilterProduct;
