import React from "react";
import { assets } from "../assets/assets";

const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)] h-12" src={assets.logo1} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-800 text-white px-10 py-3 text-sm rounded-full hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
