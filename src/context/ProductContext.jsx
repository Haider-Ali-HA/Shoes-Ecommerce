import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import ProductsData from "../data/ProductData";
import reducer from "../reducer/ProductReducer";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const Product = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //GET SINGLE PRODUCT DATA
  const getSingleProduct = useCallback((id) => {
    dispatch({ type: "SET_SINGLE_LOADER" });
    const productId = parseInt(id, 10);
    const singleProduct = ProductsData.find(
      (product) => product.id === productId
    );

    try {
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }, []);

  //GET ALL PRODUCTS DATA
  const getALLProducts = () => {
    dispatch({ type: "SET_LOADER" });
    const productsData = ProductsData;
    try {
      dispatch({ type: "GET_FEATURE_PRODUCTS", payload: productsData });
    } catch (error) {
      dispatch({ type: "GET_FEATURE_PRODUCTS_ERROR" });
    }
  };

  // This empty dependency array means this effect runs only once on mount
  useEffect(() => {
    getALLProducts();
  }, []);

  return (
    <Product.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </Product.Provider>
  );
};

const useProductContext = () => {
  return useContext(Product);
};

export { ProductProvider, Product, useProductContext };
