import React, { useEffect } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PaginationSingleProduct from "../components/PaginationSingleProduct";
import CurrencyConvert from "../components/CurrencyConvert";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    title,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  // const isSingleLoading = 'true'

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);
  return (
    <div className="mt-20">
      <PaginationSingleProduct title={title} />

      {isSingleLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <>
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <h2>{title}</h2>
            <div className="flex items-center gap-4">

            <p>stars{stars}</p>
            <p>({reviews} customer reviews)</p>
          
            </div>
            <p>
              MRP:
              <span className="line-through">{<CurrencyConvert price={price + 2500} />}</span>
            </p>
            <p>Deal of the Day :
              <span>{<CurrencyConvert price={price} />}</span>
            </p>
            <p>
           {description}
            </p>
            <div className="flex gap-11 items-center ">
              <span className="bg-white rounded-full  flex flex-col gap-2 items-center justify-center">
                <TbTruckDelivery  className="text-2xl" />
                <p>Free Delivery</p>
              </span>
              <span className="bg-white rounded-full  flex flex-col gap-2 items-center justify-center">
                <MdSecurity  className="text-2xl" />
                <p>30 Days Replacement</p>
              </span>
              <span className="bg-white rounded-full  flex flex-col gap-2 items-center justify-center">
                <GiReceiveMoney  className="text-2xl" />
                <p>Cash on Delivery</p>
              </span>
              <span className="bg-white rounded-full  flex flex-col gap-2 items-center justify-center">
                <RiSecurePaymentLine  className="text-2xl" />
                <p>Secure Payment</p>
              </span>
            </div>
            <hr className="w-full h-2 my-2" />
            <div>
              <p>Available:
                <span>{stock}</span>
              </p>
              <p>id:
                <span>{id}</span>
              </p>
              <p>Brand:
                <span>{company}</span>
              </p>
            </div>
            <hr className="w-full h-4" />
            <div>
              <h3>Colors:</h3>
              <span className="bg-red-500 h-8 w-8 rounded-full"></span>
              <span className="bg-blue-500 h-8 w-8 rounded-full"></span>
              <span className="bg-green-500 h-8 w-8 rounded-full"></span>
              <span className="bg-yellow-500 h-8 w-8 rounded-full"></span>
            </div>
            <div>
              <span></span>
              <input
                type="number"
                className="bg-white rounded-md p-2 h-7 w-24"
              />
              <span></span>
            </div>
            <button>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
