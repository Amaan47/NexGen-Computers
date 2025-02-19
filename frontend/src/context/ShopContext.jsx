import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import product from "../pages/Product.jsx"

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [count, setCount] = useState(0);


  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    } else {
      setCount(count + 1); // Increment total item count
    }

    // Clone the existing cartItems
    let cartData = structuredClone(cartItems);

    // Check if the product ID exists in the cart
    if (cartData[itemId]) {
      // Check if the specific size exists for the product
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment quantity for the size
      } else {
        cartData[itemId][size] = 1; // Add the size with a quantity of 1
      }
    } else {
      // If the product ID doesn't exist, initialize it
      cartData[itemId] = {};
      cartData[itemId][size] = 1; // Add the size with a quantity of 1
    }

    // Update the cart state
    setCartItems(cartData);
  };

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);

  const handleDelete = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    setCount(count - 1)
  };

  const getCartAmount = () => {
    let totalAmount = 0
    for(const items in cartItems){
      let itemInfo = products.find((product) => product._id === items)
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    count,
    handleDelete,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
