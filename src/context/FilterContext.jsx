import { createContext, useContext, useEffect, useReducer } from "react";

import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const Filter = createContext();

const initialState = {
  isLoading: false,
  all_products: [],
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // get sorting product value
  const sortingProductData = () => {
    const value = document.getElementById("sortProduct").value;
    dispatch({ type: "SORT_PRODUCTS", payload: value });
  };

  useEffect(() => {
    // dispatch({ type: "FILTER_PRODUCTS", payload: products });
    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    dispatch({ type: "IS_LOADING" });
  }, [products]);
  return (
    <Filter.Provider value={{ ...state, sortingProductData }}>
      {children}
    </Filter.Provider>
  );
};

const useFilterContext = () => {
  return useContext(Filter);
};

export { FilterProvider, Filter, useFilterContext };
