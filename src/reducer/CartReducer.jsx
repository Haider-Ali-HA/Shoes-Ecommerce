const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
      const { id, color, price, singleProduct } = action.payload;
      console.log(id, color, price, singleProduct);
    //   const tempItem = state.cart.find((i) => i.id === id + color);
    //   if (tempItem) {
    //     const tempCart = state.cart.map((cartItem) => {
    //       if (cartItem.id === id + color) {
    //         let newQuantity = cartItem.amount + 1;
    //         if (newQuantity > cartItem.max) {
    //           newQuantity = cartItem.max;
    //         }
    //         return { ...cartItem, amount: newQuantity };
    //       } else {
    //         return cartItem;
    //       }
    //     });
    //     return { ...state, cart: tempCart };
    //   } else {
    //     const newItem = {
    //       id: id + color,
    //       name: singleProduct.title,
    //       color,
    //       amount: 1,
    //       price,
    //       image: singleProduct.image,
    //       max: singleProduct.stock,
    //     };
    //     return { ...state, cart: [...state.cart, newItem] };
    //   }
    }
    return state;
}
export default CartReducer;