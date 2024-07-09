import React from 'react'
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const FeatureProducts = () => {
    const {isLoading,featureProducts} = useProductContext();
    const navigate = useNavigate();
    const handleProductClick = (id) => {
        // console.log("product id",id);
      navigate(`/singleProducts/${id}`);
    }
    // console.log("feature products",featureProducts);
  return (
    <>
      {
        isLoading ? (
          <h1 className="text-center text-3xl text-gray-900">Loading...</h1>
        ) : (
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {featureProducts.map((product) => {
                  const { id, title, price, image } = product;
                  return (

                    
                    <div onClick={()=> handleProductClick(id)} key={id} className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={image}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          ${price}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

export default FeatureProducts
