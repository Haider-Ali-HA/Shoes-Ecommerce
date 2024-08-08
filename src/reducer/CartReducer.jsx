const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, quantity: initialQuantity, singleProduct } = action.payload;
    console.log("singleProduct ", singleProduct);
    console.log("maximum stock ", singleProduct.stock);

    // Calculate the total quantity of the product in the cart
    const totalQuantityInCart = state.cart
      .filter((item) => item.id.startsWith(id))
      .reduce((total, item) => total + item.quantity, 0);

    let quantity = initialQuantity;

    // Check if adding the new quantity exceeds the total stock
    if (totalQuantityInCart + quantity > singleProduct.stock) {
      // Adjust the quantity to not exceed the stock
      const remainingStock = singleProduct.stock - totalQuantityInCart;
      if (remainingStock <= 0) {
        return state; // Do not add to cart if no stock is left
      }
      quantity = remainingStock; // Adjust quantity to remaining stock
    }

    // Check if product is already in cart
    let existingProduct = state.cart.find((item) => item.id === id + color);
    if (existingProduct) {
      let newCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newQuantity = cartItem.quantity + quantity;
          return {
            ...cartItem,
            quantity:
              newQuantity > cartItem.maxStock ? cartItem.maxStock : newQuantity,
          };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: newCart };
    }

    // Add product to cart
    let cartData = {
      id: id + color,
      name: singleProduct.title,
      color,
      quantity: quantity > singleProduct.stock ? singleProduct.stock : quantity,
      maxStock: singleProduct.stock,
      image: singleProduct.image,
      price: singleProduct.price,
    };

    return { ...state, cart: [...state.cart, cartData] };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    let id = action.payload;
    let newCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: newCart };
  }

  if (action.type === "CLEAR_CART_PRODUCT") {
    return { ...state, cart: [] };
  }

  return state;
};

export default CartReducer;