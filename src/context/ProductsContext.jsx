import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import data from "data/products.json";
import { initialFilterState, filterReducer } from "reducers";
import {
  cumulativeFiltersAndSorts,
  filterProductsAccordingToPriceRange,
  filterProductsAccordingToProductType,
  sortProductsAccordingToPrice,
} from "utilities";
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productsListed, updateProductsListed] = useState([]);
  const [cart, updateCart] = useState([]);
  const [currentFilterState, updateFilterState] = useReducer(
    filterReducer,
    initialFilterState
  );

  const checkItemExistsInCartOrNot = (cartDetails, selectedItemDetails) =>
    cartDetails.some(
      (everyCartItem) => everyCartItem.id === selectedItemDetails.id
    );
  const addNewItemToCart = (itemToBeAdded) => {
    updateCart((prevCart) => [...prevCart, { ...itemToBeAdded }]);
  };
  const removeExistingItemFromCart = (itemToBeRemoved) => {
    const modifiedCart = cart.filter(
      (everyCartItem) => everyCartItem.id !== itemToBeRemoved.id
    );
    updateCart(modifiedCart);
  };
  const setNewProductsList = () => {
    updateProductsListed(data?.products);
    setLoading(false);
  };
  const modifiedProductsList = cumulativeFiltersAndSorts(
    filterProductsAccordingToPriceRange,
    filterProductsAccordingToProductType,
    sortProductsAccordingToPrice
  )(currentFilterState, productsListed);
  useEffect(() => {
    const timer = setTimeout(setNewProductsList, 1500);
    return () => clearTimeout(timer);
  }, []);
  console.log(cart);
  console.log(cart.find((everyCartItem) => everyCartItem.id === "kwl-01"));
  return (
    <ProductsContext.Provider
      value={{
        productsListed,
        updateProductsListed,
        loading,
        cart,
        currentFilterState,
        updateFilterState,
        modifiedProductsList,
        addNewItemToCart,
        removeExistingItemFromCart,
        checkItemExistsInCartOrNot,
      }}
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
