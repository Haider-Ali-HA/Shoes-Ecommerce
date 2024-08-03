import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};
const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("cart",state.cart)
  const addToCart = (id, color, quantity, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, singleProduct },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
