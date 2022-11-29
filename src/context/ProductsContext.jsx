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

  // 1) Attach cursor:pointer to all icons
  // 2) On Home page i.e. on "/"" route then try adding content to it
  // 3) On the navbar logo when we click  then you should try it to go to home page
  // 4) On the navbar take care of opacity
  // 5) Take the care of cart ka box shadow
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
