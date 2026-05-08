import React from "react";
import { RiPhoneFill } from "@remixicon/react";

const Header1 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-[5vw] gap-2 py-2 text-[10px] sm:text-xs md:text-sm bg-gray-50 border-b border-gray-200 text-gray-600">
      <div className="flex items-center cursor-pointer px-2 py-1 transition-all duration-300 font-bold hover:text-primary">
        <RiPhoneFill size={14} className="mr-1.5 sm:mr-2" />
        <span>+91 8115561727</span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
        <a href="https://billing.biosoftech.in/register" target="_blank" rel="noreferrer" className="font-bold hover:text-primary transition-colors">Register</a>
        <span className="opacity-30">|</span>
        <div className="font-bold hover:text-primary cursor-pointer transition-colors">Admin</div>
        <span className="opacity-30 hidden sm:inline">|</span>
        <a href="https://billing.biosoftech.in/" target="_blank" rel="noreferrer" className="font-bold hover:text-primary transition-colors">Software Login</a>
        <span className="opacity-30 hidden lg:inline">|</span>
        <a href="https://billing.biosoftech.in/" target="_blank" rel="noreferrer" className="font-bold hover:text-primary transition-colors hidden lg:inline">CRM Login</a>
      </div>
    </div >
  );
};

export default Header1;