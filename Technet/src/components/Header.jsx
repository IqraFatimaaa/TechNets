import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-white">
          <img
            src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ffavicon.png&w=256&q=75"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-gray-"
          />
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
