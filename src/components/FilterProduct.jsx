import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterProduct = () => {
  const {
    handleName,
     searchValue ,
  } = useFilterContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search By Name"
          onChange={(e) => handleName(e)}
          className="border p-2"
        />
      </form>
    </div>
  );
};

export default FilterProduct;
