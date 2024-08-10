import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { useProductContext } from "../context/ProductContext";

const ProductQuantity = ({ id, amount, setAmount }) => {
  const { singleProduct } = useProductContext();
  const { updateCartItemQuantity } = useCartContext();

  const notify = () => toast.warning("Product is out of stock!");

  const IncreaseQuantity = () => {
    if (amount > 0) {
      if (amount === singleProduct.stock) {
        setAmount(singleProduct.stock);
        notify();
        return;
      }
      setAmount(amount + 1);
      updateCartItemQuantity(id, amount + 1);
    }
  };

  const DecreaseQuantity = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      updateCartItemQuantity(id, amount - 1);
    }
  };

  return (
    <div className="flex gap-2 md:gap-5">
      <span
        className="hover:bg-gray-700 hover:text-white h-6 w-6 flex items-center justify-center rounded-full p-1"
        onClick={DecreaseQuantity}
      >
        <FaMinus />
      </span>
      <span className=" mt-1 sm:mt-0 ">{amount}</span>
      <span
        className="hover:bg-gray-700 hover:text-white h-6 w-6 flex items-center justify-center rounded-full p-1"
        onClick={IncreaseQuantity}
      >
        <FaPlus />
      </span>
    </div>
  );
};

export default ProductQuantity;