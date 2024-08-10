import React from "react";
import CartItems from "../components/CartItems";
import { useCartContext } from "../context/CartContext";
import CurrencyConvert from "../components/CurrencyConvert";

const Cart = () => {
  const { cart, removeCartItem, total_amount, clearCartProduct, shipping_fee } =
    useCartContext();
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
        {cart.length === 0 ? (
          <h1 className="text-sm md:text-xl opacity-25 font-bold text-center">
            Your Cart is Empty
          </h1>
        ) : (
          cart.map((item) => {
            return (
              <CartItems
                key={item.id}
                {...item}
                removeCartItem={removeCartItem}
              />
            );
          })
        )}
      </div>
      <hr className="h-2 w-5/6 lg:w-4/6 border-black " />
     

      
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between  w-5/6 lg:w-4/6 gap-5">
        <button
          onClick={() => clearCartProduct()}
          className="bg-[#000000] border  border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-44  md:h-12 text-white transition-all duration-500"
        >
          Clear All Filters
        </button>
        <div className="bg-gray-100 h-40 w-72 rounded-md p-4 flex flex-col justify-center gap-2">
          <h1 className="text-base md:text-xl font-bold ">ORDER SUMMARY</h1>

          <span className="flex justify-between">
            <h1 className="text-sm md:text-base ">Subtotal</h1>
            <p className="text-sm md:text-base">
              <CurrencyConvert price={total_amount} />
            </p>
          </span>
          <span className="flex justify-between">
            <h1 className="text-sm md:text-base ">Estimated Shipping</h1>
            <p className="text-sm md:text-base">
              <CurrencyConvert price={shipping_fee} />
            </p>
          </span>
          <span className="flex justify-between">
            <h1 className="text-sm md:text-base font-semibold">Estimated Total</h1>
            <p className="text-sm md:text-base font-semibold">
              <CurrencyConvert price={total_amount + shipping_fee} />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
