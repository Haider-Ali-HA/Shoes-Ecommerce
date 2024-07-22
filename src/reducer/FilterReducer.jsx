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
    case "SORT_PRODUCTS":
      const { all_products } = state;
      let tempProducts = [...all_products];
      if (action.payload === "lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "a-z") {
        tempProducts = tempProducts.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (action.payload === "z-a") {
        tempProducts = tempProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
      return { ...state, all_products: tempProducts };
    default:
      return state;
  }
};

export default FilterReducer;
