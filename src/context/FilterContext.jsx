import { createContext, useContext, useEffect, useReducer } from "react";

import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const Filter = createContext();

const initialState = {
  isLoading: false,
  all_products: [],
  filter_products: [],
  filter: {
    searchValue: "",
    searchCategory: "",
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);


 
  // get sorting product value
  const sortingProductData = () => {
    const value = document.getElementById("sortProduct").value;
    dispatch({ type: "SORT_PRODUCTS", payload: value });
  };

  //get name value from search box
  const updateFilterValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    
    dispatch({ type: "SEARCH_NAME", payload: {value,name} });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_DATA" });
   
  }, [state.filter]);
  useEffect(() => {

    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    dispatch({ type: "IS_LOADING" });
  }, [products]);
  return (
    <Filter.Provider
      value={{
        ...state,
        sortingProductData,
        updateFilterValue,
              }}
    >
      {children}
    </Filter.Provider>
  );
};

const useFilterContext = () => {
  return useContext(Filter);
};

export { FilterProvider, Filter, useFilterContext };
