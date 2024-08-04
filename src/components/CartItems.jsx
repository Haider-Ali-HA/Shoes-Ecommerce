import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CurrencyConvert from "./CurrencyConvert";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CartItems = () => {
  const { cart } = useCartContext();
  //   console.log("cart items", cart);
  //   console.log("cart items data", cart.quantity);
  // const [quantity, setQuantity] = useState(cart.quantity);

  // const IncreaseQuantity = () => {
  //   quantity > 0 ? setQuantity(quantity + 1) : setQuantity(1);
  // };
  // const DecreaseQuantity = () => {
  //   quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  // };

  return (
    <div className="flex  flex-col gap-8">
      {cart.map((item) => {
        const [quantity, setQuantity] = useState(item.quantity);
        const IncreaseQuantity = () => {
          quantity > 0 ? setQuantity(quantity + 1) : setQuantity(1);
        };
        const DecreaseQuantity = () => {
          quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
        };

        return (
          <div
            key={item.id}
            className="grid grid-cols-4 md:grid-cols-6   text-center text-xl font-semibold"
          >
            <div className="col-span-2  flex justify-center items-center gap-3 ">
              <img
                className="w-12 md:w-16 h-10 md:h-14  rounded"
                src={item.image}
                alt={item.name}
              />
              <span className="flex flex-col justify-center ">
                <p className="text-sm text-start md:text-lg ">{item.name}</p>
                <span className="flex items-center text-sm md:text-lg">
                  <p>Color:</p>
                  <p
                    className="h-4 w-4  border shadow-2xl rounded-full font-bold  hover:opacity-70 cursor-pointer flex items-center justify-center text-4xl text-white mx-2 "
                    style={{ backgroundColor: item.color }}
                  ></p>
                </span>
              </span>
            </div>
            <h1 className="m-auto col-span-1 hidden md:block  text-lg">
              <CurrencyConvert price={item.price} />
            </h1>
            <h1 className=" m-auto col-span-1 flex gap-3 justify-center text-sm md:text-lg">
              <span
                className="hover:bg-gray-700 hover:text-white rounded-full p-1"
                onClick={() => DecreaseQuantity()}
              >
                <FaMinus />
              </span>
              <span>{quantity}</span>
              <span
                className="hover:bg-gray-700 hover:text-white rounded-full p-1"
                onClick={() => IncreaseQuantity()}
              >
                <FaPlus />
              </span>
            </h1>
            <h1 className="m-auto col-span-1  hidden md:block text-lg">
              {" "}
              <CurrencyConvert price={item.price * item.quantity} />
            </h1>
            <h1 className=" m-auto col-span-1   text-xl md:text-2xl text-[#c90404]">
              <MdDelete />
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
