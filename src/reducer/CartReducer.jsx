const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, quantity, singleProduct } = action.payload;
      let existingProduct = state.cart.find((item) => item.id === id + color);
      if (existingProduct) {
        let newCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newQuantity = cartItem.quantity + quantity;
            return {
              ...cartItem,
              quantity:
                newQuantity > cartItem.maxStock
                  ? cartItem.maxStock
                  : newQuantity,
            };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: newCart };
      }

      let cartData = {
        id: id + color,
        name: singleProduct.title,
        color,
        quantity:
          quantity > singleProduct.stock ? singleProduct.stock : quantity,
        maxStock: singleProduct.stock,
        image: singleProduct.image,
        price: singleProduct.price,
      };

      return { ...state, cart: [...state.cart, cartData] };

    case "REMOVE_CART_ITEM":
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };

    case "CLEAR_CART_PRODUCT":
      return { ...state, cart: [] };

    case "UPDATE_CART_ITEM_QUANTITY":
      let updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: action.payload.quantity };
        }
        return cartItem;
      });
      return { ...state, cart: updatedCart };
    case "GET_TOTAL":
      let { totalPrice, totalItems } = state.cart.reduce(
        (initialVal, currentVal) => {
          let { price, quantity } = currentVal;
          initialVal.totalItems = initialVal.totalItems + quantity;
          initialVal.totalPrice = initialVal.totalPrice + quantity * price;
          return initialVal;
        },
        {
          totalPrice: 0,
          totalItems: 0,
        }
      );
    

      return { ...state, total_amount: totalPrice, total_items: totalItems };

    default:
      return state;
  }
};

export default CartReducer;
