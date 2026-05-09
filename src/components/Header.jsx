import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import biosoftech from "../assets/billinglogo.jpeg";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },

    { name: "Video", path: "/video" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative">
      <div className="h-auto md:h-[10vh] w-full flex items-center justify-between px-4 md:px-[5vw] py-4 shadow-sm bg-white text-gray-900">
        <Link to="/" className="flex items-center cursor-pointer group">
          <img
            src={biosoftech}
            alt="Biosoftech Logo"
            className="h-10 md:h-14 lg:h-10 w-30 md:w-40 lg:w-30 object-contain transition-all duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setIsMenuOpen(false);
              }}
              className="font-semibold text-sm lg:text-lg flex items-center bg-gradient-to-r from-amber-500 via-orange-600 to-orange-500 bg-clip-text text-transparent relative cursor-pointer group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={biosoftech} alt="Logo" className="h-10 w-auto" />
            <button onClick={toggleMenu} className="p-2">
              <RiCloseLine size={32} className="text-gray-600" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }}
                className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
              >
                {link.name}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-gray-100">
            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;