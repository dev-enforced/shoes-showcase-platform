import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import data from "data/products.json";
const ProductsContext = createContext();

// Possible types of filters :
// Price Filter : 1500-4000, 4000-7000 & 7000+ [Checkbox]
// type: Sneakers or Shoes [Checkbox]
// Colors: Cream,Black,Blue,Grey [Radio button type]
// Price sort : High to low , low to high

const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productsListed, updateProductsListed] = useState([]);
  const [cart, updateCart] = useState([]);

  const setNewProductsList = () => {
    updateProductsListed(data?.products);
    setLoading(false);
  };


  useEffect(() => {
    const timer = setTimeout(setNewProductsList, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsListed, updateProductsListed, loading, cart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const contextReceived = useContext(ProductsContext);
  if (contextReceived === undefined) {
    throw new Error(
      "useProducts hook must be used within the Product Provider"
    );
  }
  return contextReceived;
};

export { useProducts, ProductsProvider };
