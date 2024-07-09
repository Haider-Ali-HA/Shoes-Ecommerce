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
      console.log("feature products",featureProductsData);
      return {
        ...state,
        isLoading: false,
        featureProducts: featureProductsData,
        products: action.payload,
      };
      break;
    case "GET_FEATURE_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    default:
      return state;
      break;
  }
};

export default ProductReducer;
