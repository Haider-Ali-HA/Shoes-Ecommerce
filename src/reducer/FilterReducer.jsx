const FilterReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      const tempProduct = action.payload.sort((a, b) => a.price - b.price);
      return {
        ...state,
        all_products: [...tempProduct],
        filter_products: [...tempProduct],
        isLoading: false,
      };
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
    case "SEARCH_VALUE":
      const { name, value } = action.payload;
      return { ...state, filter: { ...state.filter, [name]: value } };
    case "FILTER_PRICE":
      let tempPrice = state.all_products.map((item) => item.price);
      let maxPrice = Math.max(...tempPrice);
      let minPrice = Math.min(...tempPrice);
      return {
        ...state,
        filter: { ...state.filter, maxPrice, minPrice },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          ...state.filter,
          searchValue: "",
          selectCategory: "All",
          selectCompany: "All",
          selectColor: "All",
          minPrice: 0,
          maxPrice: state.filter.maxPrice,
          price: state.filter.maxPrice,
        },
      };
    case "FILTER_DATA":
      let tempProductsData = [...state.filter_products];
      const { searchValue, selectCategory, selectCompany, selectColor, price } =
        state.filter;
      if (searchValue) {
        tempProductsData = tempProductsData.filter((item) => {
          return item.title.toLowerCase().includes(searchValue);
        });
      }
      if (selectCategory) {
        tempProductsData = tempProductsData.filter((item) => {
          if (selectCategory === "All") {
            return item;
          }
          return item.category === selectCategory;
        });
      }
      if (selectCompany) {
        tempProductsData = tempProductsData.filter((item) => {
          if (selectCompany === "All") {
            return item;
          }
          return item.company === selectCompany;
        });
      }
      if (selectColor) {
        tempProductsData = tempProductsData.filter((item) => {
          if (selectColor === "All") {
            return item;
          }
          return item.color.includes(selectColor);
        });
      }
      if (price) {
        tempProductsData = tempProductsData.filter((item) => {
          return item.price <= price;
        });
      }
      return { ...state, all_products: tempProductsData };
    default:
      return state;
  }
};

export default FilterReducer;
