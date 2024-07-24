import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterProduct = () => {
  const { updateFilterValue, filter:{searchValue},filter:{searchCategory}, filter_products, filterSpecificItem } =
    useFilterContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get unique values
  const getUniqueValue = (allData, value) => {
    let data = allData.map((item) => {
      return item[value];
    });
    return (data = ["All", ...new Set(data)]);
  };

  const filterProductData = getUniqueValue(filter_products, "category");
  

  const handleCategoryClick = (e,item) => {
   
    setSelectedCategory(item); // Update the selected category
    updateFilterValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="searchValue"
            value={searchValue}
            placeholder="Search By Name"
            onChange={(e) => updateFilterValue(e)}
            className="border p-2"
          />
        </form>
      </div>
      <div className=" w-52 p-3">
        <h1 className="font-bold text-2xl">Category</h1>
        <ul>
          {filterProductData.map((item, index) => {
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
                  onClick={(e) => handleCategoryClick(e,item)}
                >
                  {item}
                  
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterProduct;
