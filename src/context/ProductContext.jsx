import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import ProductsData from "../data/ProductData";
import reducer from "../reducer/ProductReducer";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const Product = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const productsData=ProductsData;
//   console.log("products", productsData);
  useEffect(() => {
    dispatch({ type: "SET_LOADER" });
    try {
      dispatch({ type: "GET_FEATURE_PRODUCTS", payload: productsData });
    } catch (error) {
      dispatch({ type: "GET_FEATURE_PRODUCTS_ERROR" });
    }
    // This empty dependency array means this effect runs only once on mount
  }, []);

  return <Product.Provider value={{ ...state }}>{children}</Product.Provider>;
};

const useProductContext = () => {
  return useContext(Product);
};

export { ProductProvider, Product, useProductContext };
