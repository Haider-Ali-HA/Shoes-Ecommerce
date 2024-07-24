import React from 'react'

 import { useFilterContext } from '../context/FilterContext';
import Product from './Product';
const ProductList = () => {
  const {all_products} = useFilterContext();
  
  return (
    <div className='flex justify-center '>
      <Product productData={all_products}  />
      
    </div>
  )
}

export default ProductList
