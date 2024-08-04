import React from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <div className="mt-20 h-full w-full flex items-center justify-center flex-col gap-3 py-32">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-5 w-5/6 lg:w-4/6 text-center text-sm md:text-xl font-semibold">
        <h1 className="col-span-2 ">Items</h1>
        <h1 className="col-span-1 hidden md:block ">Price</h1>
        <h1 className="col-span-1 ">Quantity</h1>
        <h1 className="col-span-1 hidden md:block ">SubTotal</h1>
        <h1 className="col-span-1 ">Remove</h1>
      </div>
      <hr className="h-2 w-5/6 lg:w-4/6 border-black " />
      <div className=" w-5/6 lg:w-4/6">

        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
