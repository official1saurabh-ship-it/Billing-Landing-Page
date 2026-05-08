import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterFill,
  RiArrowRightLine
} from "@remixicon/react";

const Footer = () => {
  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },

    { name: 'Video Demo', path: '/video' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-white text-black py-16 px-6 md:px-[10%] font-sans transition-colors duration-300 border-t">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-orange-500 text-xl font-bold border-b-2 border-primary w-fit pb-1">Newsletter</h3>
          <p className="text-sm leading-relaxed">
            Stay updated with our latest insights and digital transformation strategies. Join our community of innovators.
          </p>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-[#f9f9f9] border border-gray-200 rounded-full py-3 px-5 focus:outline-none focus:border-primary text-sm transition-colors text-black"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-400 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col gap-6">
          <h3 className="text-orange-500 text-xl font-bold border-b-2 border-primary w-fit pb-1">Explore</h3>
          <ul className="flex flex-col gap-3">
            {exploreLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <RiArrowRightLine className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-orange-500 text-xl font-bold border-b-2 border-primary w-fit pb-1">Contact Info</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-700">
            <div className="flex gap-3">
              <RiMapPinLine className="text-primary shrink-0" />
              <span>First floor, H-Block, Anora Kala, Near Goel Tower, Faizabad Road, Lucknow, UP - 226028</span>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine className="text-primary shrink-0" />
              <a href="mailto:Info@Biosoftech.com" className="hover:text-primary transition-colors text-black">Info@Biosoftech.com</a>
            </div>
            <div className="flex items-center gap-3">
              <RiPhoneLine className="text-primary shrink-0" />
              <a href="tel:+916209688930" className="hover:text-primary transition-colors text-black">+91 6209688930</a>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/billingmitra" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-orange-500 transition-all text-gray-600">
              <RiFacebookBoxLine size={20} />
            </a>
            <a href="https://www.instagram.com/billingmitra/" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-orange-500 transition-all text-gray-600">
              <RiInstagramLine size={20} />
            </a>
            <a href="https://www.linkedin.com/company/billing-mitra" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-orange-500 transition-all text-gray-600">
              <RiLinkedinLine size={20} />
            </a>
            {/* <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-orange-500 transition-all text-gray-600"> */}
            {/* <RiTwitterFill size={20} /> */}
            {/* </a> */}
          </div>
        </div>

        {/* Column 4: Popular Post */}
        <div className="flex flex-col gap-6">
          <h3 className="text-orange-500 text-xl font-bold border-b-2 border-primary w-fit pb-1">Popular Post</h3>
          <div className="flex flex-col gap-4">
            <div className="group cursor-pointer">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Investment</span>
              <p className="text-sm mt-1 group-hover:text-primary transition-colors">Maximizing Returns in the Digital Age: A Strategic Guide</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Business</span>
              <p className="text-sm mt-1 group-hover:text-primary transition-colors">Why Agile Methodology is Crucial for Modern Enterprises</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p className="text-center md:text-left text-gray-500">
          © 2026 BioSoftech. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span className="text-gray-500">Designed By BioSoftech Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;