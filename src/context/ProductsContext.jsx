import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
const ProductsContext = createContext();

// Possible types of filters :
// Price Filter : 1500-4000, 4000-7000 & 7000+ [Checkbox]
// type: Sneakers or Shoes [Checkbox]
// Colors: Cream,Black,Blue,Grey [Radio button type]
// Price sort : High to low , low to high

const ProductsProvider = ({ children }) => {
  const [productsListed, updateProductsListed] = useState([]);
  return (
    <ProductsContext.Provider value={{ productsListed, updateProductsListed }}>
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
