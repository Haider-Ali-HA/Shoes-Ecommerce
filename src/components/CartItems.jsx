import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CurrencyConvert from "./CurrencyConvert";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ProductQuantity from "./ProductQuantity";

const CartItems = ({ id, name, image, color, price, quantity,removeCartItem }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  
  return (
    <div className="flex  flex-col gap-8">
      <div
        key={id}
        className="grid grid-cols-4 md:grid-cols-6   text-center text-xl font-semibold"
      >
        <div className="col-span-2  flex justify-center items-center gap-3 ">
          <img
            className="w-12 md:w-16 h-10 md:h-14  rounded"
            src={image}
            alt={name}
          />
          <span className="flex flex-col justify-center ">
            <p className="text-sm text-start md:text-lg ">{name}</p>
            <span className="flex items-center text-sm md:text-lg">
              <p>Color:</p>
              <p
                className="h-4 w-4  border shadow-2xl rounded-full font-bold  hover:opacity-70 cursor-pointer flex items-center justify-center text-4xl text-white mx-2 "
                style={{ backgroundColor: color }}
              ></p>
            </span>
          </span>
        </div>
        <h1 className="m-auto col-span-1 hidden md:block  text-lg">
          <CurrencyConvert price={price} />
        </h1>
        <h1 className=" m-auto col-span-1 flex gap-3 justify-center text-sm md:text-lg">
        <ProductQuantity amount={itemQuantity} setAmount={setItemQuantity} />
        </h1>
        <h1 className="m-auto col-span-1  hidden md:block text-lg">
          {" "}
          <CurrencyConvert price={price * itemQuantity} />
        </h1>
        <h1
          onClick={() => removeCartItem(id)}
          className=" m-auto col-span-1  cursor-pointer  text-xl md:text-2xl text-[#c90404]"
        >
          <MdDelete />
        </h1>
      </div>
    </div>
  );
};

export default CartItems;
