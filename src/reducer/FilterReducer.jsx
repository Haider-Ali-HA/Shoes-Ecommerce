const FilterReducer = (state, action) => {
  switch (action.type) {
    //   case "FILTER_PRODUCTS":
    //     const { products } = action.payload;
    //     const newProducts = products.map((product) => {
    //       const { id, title, price, image } = product;
    //       return { id, title, price, image };
    //     });
    //     return { ...state, filtered_products: newProducts };
    case "GET_ALL_PRODUCTS":
      return { ...state, all_products: action.payload, isLoading: false };
    case "IS_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default FilterReducer;
