import React from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const SearchIcon = () => {
  const { setShowSearch } = useContext(ShopContext);
  return (
    <div onClick={() => setShowSearch(true)}>
      <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
    </div>
  );
};

export default SearchIcon;
