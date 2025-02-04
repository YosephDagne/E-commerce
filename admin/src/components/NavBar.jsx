import React from "react";
import { assets } from "../assets/assets";

const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)] h-12" src={assets.logo1} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-500 text-white px-4 py-2 text-md rounded-lg shadow-md hover:bg-green-500 hover:scale-105 hover:rounded-full transition-all duration-300 ease-in-out active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
