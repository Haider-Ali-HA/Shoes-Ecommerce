const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_FEATURE_PRODUCTS":
      const featureProductsData = action.payload.filter((product) => {
        return product.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        featureProducts: featureProductsData,
        products: action.payload,
      };
    case "GET_FEATURE_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADER":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
        
      };
      
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
