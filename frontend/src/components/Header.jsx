import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "../pages/SearchIcon";

const Header = () => {
  const { count } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between font-medium p-2 ">
      <Link to="/">
        <img src={assets.logo} alt="#" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
      </ul>

      <div className="flex items-center sm:gap-6 gap-2 ">
        <SearchIcon />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer "
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col w-36 gap-2 py-3 px-5 bg-slate-100  text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center 
          leading-4 text-white rounded-full bg-black text-[8px] aspect-square "
          >
            {count}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar menu for sm screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
