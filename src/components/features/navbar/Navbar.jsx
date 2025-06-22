import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import the AnchorLink component
import logo from "/Users/vivekbhamla/Desktop/react js/landingpage/src/assets/logo.png";
import { Button } from "../../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
        <div className="flex items-center px-4 py-2 bg-transparent">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-auto object-contain drop-shadow-md transition-transform duration-200 hover:scale-105"
          />
        </div>

        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="your solution is here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-6 text-gray-700 font-medium">
          {/* Use AnchorLink for smooth scrolling */}
          <AnchorLink
            href="#categories"
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Categories
          </AnchorLink>
          <AnchorLink
            href="#experts"
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Experts
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            About Us
          </AnchorLink>
        </div>

        <div className="ml-6">
          <Button variant={"destructive"}>sign In</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
