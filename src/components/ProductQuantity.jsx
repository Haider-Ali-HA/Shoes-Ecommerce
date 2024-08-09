import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";

const ProductQuantity = ({ amount, setAmount }) => {
  const { singleProduct } = useProductContext();
  console.log("singleProduct ", singleProduct.stock);
  console.log("amount ", amount);

  const notify = () => toast.warning("Product is out of stock!");
  const IncreaseQuantity = () => {
    if (amount > 0) {
      if (amount === singleProduct.stock) {
        setAmount(singleProduct.stock);
        notify();
        return;
      }
      setAmount(amount + 1);
    }
  };
  const DecreaseQuantity = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
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
        className={
          "hover:bg-gray-700 hover:text-white h-6 w-6 flex items-center justify-center  rounded-full p-1"
        }
        onClick={() => IncreaseQuantity()}
        disabled={amount === singleProduct.stock}
      >
        <FaPlus />
      </span>
    </div>
  );
};

export default ProductQuantity;
