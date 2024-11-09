import React, { useCallback, useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PaginationSingleProduct from "../components/PaginationSingleProduct";
import CurrencyConvert from "../components/CurrencyConvert";
import Stars from "../components/Stars";
import { IoIosCheckmark } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import ProductQuantity from "../components/ProductQuantity";
import ReactImageMagnify from "react-image-magnify";
import ImageMagnify from "../components/ImageMagnify";

const SingleProduct = () => {
  const { addToCart } = useCartContext();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  // Active image index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Destructure the singleProduct object
  const {
    title,
    company,
    price,
    description,
    category,
    color,
    multipleImage,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  // Set the initial image to be displayed
  const [singleImage, setSingleImage] = useState(image);

  // Set the initial color index
  const [productColorSelected, setProductColorSelected] = useState();

  const [selectedProductColor, setSelectedProductColor] = useState("");

  // increase or decrease the quantity
  const [quantity, setQuantity] = useState(1);

  //set the image coordinates
  const [imageZoomCoordinates, setImageZoomCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // Handle image zoom
  const handleImageZoom = useCallback(
    (e) => {
      setIsImageZoomed(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setImageZoomCoordinates({ x, y });
    },
    [imageZoomCoordinates]
  );

  // Handle image zoom out
  const handleImageZoomOut = () => {
    setIsImageZoomed(false);
  };

  // Handle color click to set the active color
  const handleColorClick = (index, colors) => {
    setProductColorSelected(index); // Step 1: Update the active color index
    setSelectedProductColor(colors);
  };

  //Handle image click to set the active image
  const handleImageClick = (imageUrl, index) => {
    setSingleImage(imageUrl); // Update the main image displayed
    setActiveImageIndex(index); // Step 2: Update the active image index
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id, getSingleProduct]);

  useEffect(() => {
    if (image) {
      setSingleImage(image);
    }
  }, [image]);

  return (
    <div className="mt-20 ">
      <PaginationSingleProduct title={title} />

      {isSingleLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <>
          <div className="flex  flex-col lg:flex-row gap-10 items-center justify-center mb-20 px-10">
            <div className="flex flex-col-reverse  lg:flex-row gap-5    h-full">
              <div className="flex lg:flex-col items-center justify-center  gap-5 rounded   ">
                {multipleImage?.map((imageUrl, index) => {
                  return (
                    <img
                      onClick={() => handleImageClick(imageUrl.img, index)}
                      key={index}
                      src={imageUrl.img}
                      alt={`${title} ${index + 1}`}
                      className={`w-16 sm:w-32 rounded cursor-pointer ${
                        index === activeImageIndex
                          ? "shadow-[1px_1px_40px_#dbdbdb] "
                          : ""
                      }`}
                    />
                  );
                })}
              </div>

              {/* main image with zoom image inside  */}
              {/* <div className="flex   items-center justify-center relative">
                <div
                  className=" flex items-center justify-center"
                  onMouseMove={handleImageZoom}
                  onMouseLeave={handleImageZoomOut}
                >
                  <img
                    className="w-5/6 sm:w-[29rem] shadow  "
                    src={singleImage}
                    alt=""
                  />
                </div>

              
                {isImageZoomed && (
                  <div className="hidden lg:block overflow-hidden absolute bg-red-400 min-h-[19.4rem] min-w-[29rem] -right-[30rem] ">
                    <div
                      className="min-h-[19.4rem] scale-150  min-w-[29rem] bg-no-repeat object-full "
                      style={{
                        backgroundImage: `url(${singleImage})`,
                        backgroundPosition: `${imageZoomCoordinates.x}% ${imageZoomCoordinates.y}%`,
                      }}
                    ></div>
                  </div>
                )}
              </div> */}
              {/* <div className="flex items-center justify-center relative">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: `${title}`, // Alt text for accessibility
                      isFluidWidth: true,
                      src: singleImage, // Use singleImage for small image source
                    },
                    largeImage: {
                      src: singleImage, // Use singleImage for large image source as well
                      width: 800, // Adjusted width for large image
                      height: 1200, // Adjusted height for large image
                    },
                    enlargedImageContainerDimensions: {
                      width: "200%", // Fits the zoom view inside the container better
                      height: "200%", // Adjust height as needed
                    },
                    enlargedImagePosition: "over", // Position the zoomed image overlay over the original
                  }}
                />
              </div> */}
              <div className="flex items-center justify-center relative">
                <div className="hidden lg:block">
                  <ImageMagnify 
                    src={singleImage}
                    width={800}
                    height={800}
                    magnifierHeight={300}
                    magnifierWidth={300}
                    zoomLevel={2}
                    alt={title}
                  />
                </div>
                <div className=" lg:hidden flex items-center justify-center">
                  <img
                    src={singleImage}
                    alt={title}
                    className="w-5/6 sm:w-[29rem] shadow"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {title}
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2  text-sm md:text-base ">
                  <span>
                    <Stars stars={stars} />
                  </span>
                  <span>({reviews} customer reviews)</span>
                </div>

                <p className=" text-sm md:text-base">
                  MRP:
                  <span className="line-through font-semibold ml-2">
                    {<CurrencyConvert price={price + 2500} />}
                  </span>
                </p>
                <p className="text-[#ff4343] font-semibold  text-sm md:text-base">
                  Deal of the Day :
                  <span
                    className=" ml-2 
                  "
                  >
                    {<CurrencyConvert price={price} />}
                  </span>
                </p>
                <p className="w-full  text-sm md:text-base ">{description}</p>
              </div>
              <div className="flex gap-1 md:gap-7 items-center my-2 ">
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <TbTruckDelivery className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">
                    Free Delivery
                  </p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <MdSecurity className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">
                    30 Days Replacement
                  </p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <GiReceiveMoney className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">
                    Cash on Delivery
                  </p>
                </span>
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="bg-gray-100 rounded-full p-2">
                    <RiSecurePaymentLine className="text-xl md:text-2xl" />
                  </span>
                  <p className=" text-xs md:text-base text-center">
                    Secure Payment
                  </p>
                </span>
              </div>
              <hr className=" w-full h-2 mb-2" />
              <div>
                <p className="md:text-start text-sm md:text-base">
                  <span className="font-semibold ">Available:</span>
                  <span className="ml-2">
                    {stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>

                <p className="my-3  text-sm md:text-base">
                  <span className="font-semibold">Brand:</span>
                  <span className=" ml-2">{company}</span>
                </p>
                <p className="my-3  text-sm md:text-base">
                  <span className="font-semibold">Category:</span>
                  <span className=" ml-2">{category}</span>
                </p>
              </div>
              <div className="flex my-3  text-sm md:text-base">
                <h3 className="font-semibold">Colors:</h3>
                {color?.map((colors, index) => {
                  return (
                    <p
                      key={index}
                      className={`h-4 w-4 md:w-6 md:h-6 border shadow-2xl rounded-full font-bold  hover:opacity-70 cursor-pointer flex items-center justify-center text-4xl text-white mx-2 
                      `}
                      style={{ backgroundColor: colors }}
                      onClick={() => handleColorClick(index, colors)}
                    >
                      {productColorSelected === index ? <IoIosCheckmark /> : ""}
                    </p>
                  );
                })}
              </div>
              <div className="flex items-center gap-3  text-sm md:text-base">
                <h1 className="font-semibold">Quantity : </h1>
                <ProductQuantity
                  id={id}
                  amount={quantity}
                  setAmount={setQuantity}
                />
              </div>
              <div className="text-base font-semibold my-4">
                <Link to="/cart">
                  <button
                    onClick={() =>
                      addToCart(
                        id,
                        selectedProductColor,
                        quantity,
                        singleProduct
                      )
                    }
                    className="bg-[#000000] border border-[#000000] text-sm md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
