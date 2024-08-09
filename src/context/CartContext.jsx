import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
import { toast } from "react-toastify";

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("Local Storage Cart Data")) || [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const notify = (message) => toast.success(message);
  // remove cart items by id
  const removeCartItem = (id) => {
    notify("Item Deleted Successfully!");
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };
  // add products to the cart[]
  const addToCart = (id, color, quantity, singleProduct) => {
    notify("Item Added Successfully!");
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, singleProduct },
    });
  };
  // dispatch({ type: "GET_TOTALS" });

  // clear all products from the cart[]
  const clearCartProduct = () => {
    dispatch({ type: "CLEAR_CART_PRODUCT" });
  };
  useEffect(() => {
    localStorage.setItem("Local Storage Cart Data", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCartItem, clearCartProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
