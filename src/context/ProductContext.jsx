import { createContext, useContext, useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";

const Product = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const fetchProducts = async () => {
        //     try {
        //         const data = await fetchDataFromApi('your-endpoint'); // Replace 'your-endpoint' with the actual endpoint
        //         setProducts(data);
        //     } catch (error) {
        //         console.error("Error fetching products:", error);
        //     }
        // };

        // fetchProducts();
    }, []);

    return <Product.Provider value={products}>{children}</Product.Provider>;
};

// custom hook
const useProductContext = () => {
    return useContext(Product);
};

export { ProductProvider, Product, useProductContext };