import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CurrencyConvert from "./CurrencyConvert";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ProductQuantity from "./ProductQuantity";

const CartItems = ({
  id,
  name,
  image,
  color,
  price,
  quantity,
  removeCartItem,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  return (
    <div className="flex  flex-col  ">
      <div
        key={id}
        className="grid grid-cols-4 md:grid-cols-6 gap-5 text-center text-xl font-semibold"
      >
        <div className="col-span-2  sm:ml-[10%] items-center flex   gap-4 ">
         
          <img
            className="w-12 md:w-20 h-10 md:h-14  rounded"
            src={image}
            alt={name}
            />
          <span className="flex flex-col justify-center ">
            <p className= "text-xs sm:text-sm text-start md:text-lg ">{name}</p>
            <span className="flex items-center  text-xs sm:text-sm md:text-lg">
              <p>Color:</p>
              <p
                className="h-4 w-4  border shadow-2xl rounded-full font-bold  hover:opacity-70 cursor-pointer flex items-center justify-center text-4xl text-white mx-2 "
                style={{ backgroundColor: color }}
                ></p>
            </span>
          </span>
               
        </div>
        <h1 className="mx-auto col-span-1 hidden md:block  text-lg">
          <CurrencyConvert price={price} />
        </h1>
        <h1 className=" mx-auto col-span-1 flex gap-3 justify-center text-xs sm:text-sm md:text-lg">
          <ProductQuantity amount={itemQuantity} setAmount={setItemQuantity} />
        </h1>
        <h1 className="mx-auto col-span-1  hidden md:block text-lg">
          {" "}
          <CurrencyConvert price={price * itemQuantity} />
        </h1>
        <h1
          onClick={() => removeCartItem(id)}
          className=" mx-auto col-span-1  cursor-pointer text-base sm:text-xl md:text-2xl text-[#c90404]"
        >
          <MdDelete />
        </h1>
      </div>
    </div>
  );
};

export default CartItems;
