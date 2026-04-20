import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import biosoftech from "../assets/biosoftech.png";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="h-auto md:h-[10vh] w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[5vw] py-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <Link to="/" className="font-bold text-3xl md:text-5xl lg:text-6xl flex bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group mb-4 md:mb-0">
        <img src={biosoftech} alt="" />
      </Link>



      <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6">
        <div onClick={() => navigate("about")} className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          <span className="mr-1">About</span> <span>Us</span>
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </div>
        <div className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          Features
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </div>
        <div className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          Pricing
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </div>
        <div onClick={() => navigate("reference")} className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          Reference Websites
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </div>
        <Link to="/video" className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          Video
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
        <div className="font-semibold text-sm lg:text-xl flex items-center bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap">
          Contact
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-4 text-sm font-bold text-gray-600 dark:text-gray-300">
          <span>MENU ☰</span>
        </div>
      </div>
    </div>
  );
};

export default Header;