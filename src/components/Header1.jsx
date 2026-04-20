import React from "react";
import { RiPhoneFill, RiMailLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row justify-between items-center px-4 md:px-[5vw] gap-2 py-2 text-xs md:text-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center hover:text-green-700 dark:hover:text-green-400 cursor-pointer px-3 py-1 transition-all duration-300 font-semibold text-gray-700 dark:text-gray-300">
        <span className="mr-2 scale-75 md:scale-100">
          <RiPhoneFill size={18} />
        </span>
        <span>8115561727</span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-1 md:gap-0 text-gray-700 dark:text-gray-300">
        <div className="flex items-center cursor-pointer px-2 py-1 transition-all duration-300 hover:text-green-700 dark:hover:text-green-400 font-semibold">
          <span className="mr-2 scale-75 md:scale-100">
            <RiMailLine size={18} />
          </span>
          <span>info@gmail.com</span>
        </div>

        <span className="hidden md:inline mx-2 text-gray-400 dark:text-gray-600">|</span>
        <Link to="/signup" className="cursor-pointer px-2 py-1 transition-all duration-300 hover:text-green-700 dark:hover:text-green-400 font-semibold">
          Register
        </Link>

        <span className="hidden md:inline mx-2 text-gray-400 dark:text-gray-600">|</span>
        <div className="cursor-pointer px-2 py-1 transition-all duration-300 hover:text-green-700 dark:hover:text-green-400 font-semibold">
          Super Admin Login
        </div>

        <span className="hidden md:inline mx-2 text-gray-400 dark:text-gray-600">|</span>
        <div className="cursor-pointer px-2 py-1 transition-all duration-300 hover:text-green-700 dark:hover:text-green-400 font-semibold">
          Software Login
        </div>

        <span className="hidden md:inline mx-2 text-gray-400 dark:text-gray-600">|</span>
        <div className="cursor-pointer px-2 py-1 transition-all duration-300 hover:text-green-700 dark:hover:text-green-400 font-semibold">
          CRM Login
        </div>
      </div>
    </div>
  );
};

export default Header1;