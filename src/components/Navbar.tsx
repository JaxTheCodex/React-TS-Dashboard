import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import UserIcon from '../assets/images/icon-5359553_640.png';
import Sidebar from './Sidebar'; // Import Sidebar component

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-transparent px-4 py-2 flex justify-between items-center">
        {/* Left Side: User Image, Name, and Sub-note */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={UserIcon}
            alt="User"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          <div className="text-black">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              Welcome, Jack Doe
            </h1>
            <p className="text-xs sm:text-sm md:text-base">
              Your personal dashboard overview
            </p>
          </div>
        </div>

        {/* Right Side: Search Bar, User Profile Icon, and Hamburger Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Bar - Adjusted for different screen sizes */}
          <div className="relative hidden sm:block"> {/* Hidden on small screens */}
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-32 sm:w-40 lg:w-80 rounded-full shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-400 cursor-pointer" />
          </div>

          {/* User Profile Icon */}
          <FaUserCircle className="hidden sm:block text-gray-600 bg-white p-1 rounded-full text-2xl sm:text-4xl shadow-sm border-2 border-white cursor-pointer" />

          {/* Hamburger Menu (visible on small screens) */}
          <FaBars
            className="text-2xl text-gray-600 cursor-pointer sm:hidden" // Visible only on small screens
            onClick={toggleSidebar}
          />
        </div>
      </nav>

      {/* Sidebar (Off-canvas) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleSidebar}>
          <div className="w-0" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
