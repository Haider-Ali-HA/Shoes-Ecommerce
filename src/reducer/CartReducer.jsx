const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
      const { id, color, quantity, singleProduct } = action.payload;
      // console.log(id, color, price, singleProduct);
      let cartData;
      cartData={
        id:id+color,
        name:singleProduct.title,
        color,
        quantity,
        maxStock:singleProduct.stock,
        image:singleProduct.image,
        price:singleProduct.price,
      }
      return {...state,cart:[...state.cart,cartData]}
    
    }
    return state;
}
export default CartReducer;