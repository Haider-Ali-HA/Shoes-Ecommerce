import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductQuantity = ({ amount, setAmount }) => {
  const IncreaseQuantity = () => {
    amount > 0 ? setAmount(amount + 1) : setAmount(1);
  };
  const DecreaseQuantity = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <div className="flex  gap-5">
      <span
        className="hover:bg-gray-700 hover:text-white  h-6 w-6 flex items-center justify-center rounded-full p-1"
        onClick={() => DecreaseQuantity()}
      >
        <FaMinus />
      </span>
      <span>{amount}</span>
      <span
        className="hover:bg-gray-700 hover:text-white h-6 w-6 flex items-center justify-center  rounded-full p-1"
        onClick={() => IncreaseQuantity()}
      >
        <FaPlus />
      </span>
    </div>
  );
};

export default ProductQuantity;
