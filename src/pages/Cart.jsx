import React from "react";
import CartItems from "../components/CartItems";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeCartItem, total_amount,clearCartProduct } = useCartContext();
  return (
    <div className="mt-20 h-full w-full flex items-center justify-center flex-col gap-3 py-32 font-poppins">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-5 w-5/6 lg:w-4/6 text-center text-sm md:text-xl font-semibold">
        <h1 className="col-span-2 text-start sm:ml-[10%] ">Items</h1>
        <h1 className="col-span-1 hidden md:block ">Price</h1>
        <h1 className="col-span-1 ">Quantity</h1>
        <h1 className="col-span-1 hidden md:block ">SubTotal</h1>
        <h1 className="col-span-1 ">Remove</h1>
      </div>
      <hr className="h-2 w-5/6 lg:w-4/6 border-black " />
      <div className=" w-5/6 lg:w-4/6 flex flex-col gap-6">
      
        {cart.length===0 ? 
        <h1 className="text-xl opacity-25 font-bold text-center">Your Cart is Empty</h1>
        :cart.map((item) => {
          return (
            <CartItems
              key={item.id}
              {...item}
              removeCartItem={removeCartItem}
            />
          );
        })}
      </div>
      <hr className="h-2 w-5/6 lg:w-4/6 border-black " />
      <div className="flex justify-between  w-5/6 lg:w-4/6">
        <button
          onClick={() => clearCartProduct()}
          className="bg-[#000000] border  border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-44  md:h-12 text-white transition-all duration-500"
        >
          Clear All Filters
        </button>
        <div className="bg-gray-200 h-52 w-72 rounded-md p-4 flex flex-col gap-2">
          <h1 className="text-xl font-bold ">ORDER SUMMARY</h1>

          <span className="flex justify-between">
            <h1 className="text-base ">Subtotal</h1>
            <p>{total_amount}</p>
          </span>
          <span className="flex justify-between">
            <h1 className="text-base ">Estimated Shipping</h1>
          </span>
          <span className="flex justify-between">
            <h1 className="text-base font-semibold">Estimated Total</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
