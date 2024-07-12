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
            <p>ratings</p>
            <p>MRP:{
              <CurrencyConvert price={price+2500} />
              }</p>
            <p>Deal of the Day :26723</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              perferendis deleniti est fugit consequuntur. Magni rerum
              architecto, fugiat velit blanditiis, aperiam dicta numquam libero
              dolores dolor molestias sit provident dolore?
            </p>
            <div>
              <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <TbTruckDelivery />
              </span>
              <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <MdSecurity />
              </span>
              <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <GiReceiveMoney />
              </span>
              <span className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <RiSecurePaymentLine />
              </span>
            </div>
            <hr className="w-full h-2" />
            <div>
              <p>Available:in stock</p>
              <p>id:haider</p>
              <p>Brand:Lenovo</p>
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
