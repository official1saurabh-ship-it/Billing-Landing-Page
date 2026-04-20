import React from 'react';
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
  return (
    <footer className="bg-gray-100 dark:bg-[#111111] text-gray-700 dark:text-gray-300 py-16 px-6 md:px-[10%] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-900 dark:text-white text-xl font-bold border-b-2 border-blue-500 w-fit pb-1">Newsletter</h3>
          <p className="text-sm leading-relaxed">
            Stay updated with our latest insights and digital transformation strategies. Join our community of innovators.
          </p>
          <div className="relative mt-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 text-sm transition-colors text-gray-900 dark:text-white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-900 dark:text-white text-xl font-bold border-b-2 border-blue-500 w-fit pb-1">Explore</h3>
          <ul className="flex flex-col gap-3">
            {['Home', 'Services', 'About Us', 'Latest Products', 'Testimonial', 'Our Team', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                  <RiArrowRightLine className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-900 dark:text-white text-xl font-bold border-b-2 border-blue-500 w-fit pb-1">Contact Info</h3>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex gap-3">
              <RiMapPinLine className="text-blue-500 shrink-0" />
              <span>First floor, H-Block, Anora Kala, Near Goel Tower, Faizabad Road, Lucknow, UP - 226028</span>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine className="text-blue-500 shrink-0" />
              <a href="mailto:Info@Biosoftech.com" className="hover:text-blue-500 transition-colors">Info@Biosoftech.com</a>
            </div>
            <div className="flex items-center gap-3">
              <RiPhoneLine className="text-blue-500 shrink-0" />
              <a href="tel:+916209688930" className="hover:text-blue-500 transition-colors">+91 6209688930</a>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-gray-200 dark:bg-[#222222] rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-700 dark:text-gray-300">
              <RiFacebookBoxLine size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-200 dark:bg-[#222222] rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-700 dark:text-gray-300">
              <RiInstagramLine size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-200 dark:bg-[#222222] rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-700 dark:text-gray-300">
              <RiLinkedinLine size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-200 dark:bg-[#222222] rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-700 dark:text-gray-300">
              <RiTwitterFill size={20} />
            </a>
          </div>
        </div>

        {/* Column 4: Popular Post */}
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-900 dark:text-white text-xl font-bold border-b-2 border-blue-500 w-fit pb-1">Popular Post</h3>
          <div className="flex flex-col gap-4">
            <div className="group cursor-pointer">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Investment</span>
              <p className="text-sm mt-1 group-hover:text-blue-500 transition-colors">Maximizing Returns in the Digital Age: A Strategic Guide</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Business</span>
              <p className="text-sm mt-1 group-hover:text-blue-500 transition-colors">Why Agile Methodology is Crucial for Modern Enterprises</p>
            </div>
            <button className="mt-2 bg-transparent border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition-all self-start">
              View All Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p className="text-center md:text-left">
          © 2026 BioSoftech. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <span className="text-gray-600">Designed By BioSoftech Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;