const FilterReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      const tempProduct = action.payload.sort((a, b) => a.price - b.price);

      return { ...state, all_products: [...tempProduct],filter_products: [...tempProduct], isLoading: false };
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
        tempProducts = tempProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (action.payload === "z-a") {
        tempProducts = tempProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      return { ...state, all_products: tempProducts };
    case "SEARCH_NAME":
      return { ...state, searchValue: action.payload };
    case "FILTER_DATA_BY_NAME":
      
      let tempProductsData = [...state.filter_products];
      const searchValue = state.searchValue;
     
      tempProductsData = tempProductsData.filter((item) => {
        return item.title.toLowerCase().includes(searchValue);
      });
      return { ...state, all_products: tempProductsData };

    default:
      return state;
  }
};

export default FilterReducer;
