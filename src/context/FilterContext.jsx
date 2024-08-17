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
    selectCategory: "",
    selectCompany: "",
    selectColor: "",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
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

  // get name value from search box
  const updateFilterValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch({ type: "SEARCH_VALUE", payload: { value, name } });
  };

  // Clear all filters
  const ClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    dispatch({ type: "IS_LOADING" });
    dispatch({ type: "FILTER_PRICE" }); // Dispatch FILTER_PRICE action
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_DATA" });
  }, [state.filter]);

  return (
    <Filter.Provider
      value={{
        ...state,
        sortingProductData,
        updateFilterValue,
        ClearFilters,
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
