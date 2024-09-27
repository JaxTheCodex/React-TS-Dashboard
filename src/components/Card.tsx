import React from 'react';
import { FiRefreshCw, FiStar, FiClock, FiCheck } from 'react-icons/fi';
import { FaUsers, FaCheck, FaTrophy } from 'react-icons/fa';
import User from '../assets/images/user.jpg';
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';

const Card: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:p-6 rounded-lg">
      {/* Left box - 100% width on small screens, 35% on medium/large screens */}
      <div className="col-span-12 md:col-span-4 p-4 flex flex-col justify-between rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Profile</h2>
          <FiRefreshCw className="text-lg md:text-xl cursor-pointer" />
        </div>

        {/* Center Image with Circular Ring */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-t-red-500 rotate-45 flex items-center justify-center">
              <img
                src={User}
                alt="user"
                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover rotate-[-45deg]"
              />
            </div>

            {/* Star Icon */}
            <div className="absolute right-0 bottom-0 bg-black rounded-full p-1 shadow-md">
              <FiStar className="text-white text-lg md:text-xl" />
            </div>
          </div>

          {/* Name and Profession */}
          <h3 className="text-md md:text-lg font-bold mt-4">Jack Doe</h3>
          <p className="text-sm md:text-base text-gray-500">Web Developer</p>
        </div>

        {/* Horizontal Line of Three Small Boxes */}
        <div className="flex justify-center space-x-4 mt-6">
          <div className="w-16 md:w-20 h-10 md:h-12 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
            <FaUsers className="text-red-500 mr-1 md:mr-2" />
            <p className="text-xs md:text-base">11</p>
          </div>
          <div className="w-16 md:w-20 h-10 md:h-12 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
            <FaCheck className="text-red-500 mr-1 md:mr-2" />
            <p className="text-xs md:text-base">56</p>
          </div>
          <div className="w-16 md:w-20 h-10 md:h-12 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
            <FaTrophy className="text-red-500 mr-1 md:mr-2" />
            <p className="text-xs md:text-base">12</p>
          </div>
        </div>
      </div>

      {/* Right side - Two equal boxes and one below */}
      <div className="col-span-12 md:col-span-8 grid grid-rows-3 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 row-span-2">
          {/* First Box */}
          <div
            className="p-4 flex flex-col justify-between rounded-lg shadow-lg h-64 md:h-72"
            style={{
              background:
                'linear-gradient(75deg, rgba(138,146,255,1) 0%, rgba(177,178,179,1) 8%, rgba(255,140,0,1) 26%, rgba(251,88,182,1) 100%)',
            }}
          >
            <div className="flex justify-between">
              <span className="text-xl md:text-2xl font-semibold text-black text-shadow">
                Prioritized Task
              </span>
              <div className="relative">
                <div className="absolute top-0 right-0 bg-white bg-opacity-30 rounded-full p-2">
                  <FiClock className="text-black text-lg md:text-xl" />
                </div>
              </div>
            </div>

            {/* Bottom Left - Percentage */}
            <div className="mt-auto">
              <p className="text-4xl md:text-6xl font-bold text-black">83%</p>
              <p className="text-sm md:text-base text-black">Avg Completed</p>
            </div>
          </div>

          {/* Second Box */}
          <div
            className="p-4 flex flex-col justify-between rounded-lg shadow-lg h-64 md:h-72"
            style={{
              background:
                'linear-gradient(75deg, rgba(0,238,247,1) 0%, rgba(255,255,255,1) 12%, rgba(0,168,255,1) 44%, rgba(26,48,237,1) 89%)',
            }}
          >
            <div className="flex justify-between">
              <span className="text-xl md:text-2xl font-semibold text-black text-shadow">
                Additional Tasks
              </span>
              <div className="relative">
                <div className="absolute top-0 right-0 bg-white bg-opacity-30 rounded-full p-2">
                  <FiCheck className="text-black text-lg md:text-xl" />
                </div>
              </div>
            </div>

            {/* Bottom Left - Percentage */}
            <div className="mt-auto">
              <p className="text-4xl md:text-6xl font-bold text-black">56%</p>
              <p className="text-sm md:text-base text-black">Avg Completed</p>
            </div>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between rounded-lg shadow-lg bg-gray-300">
  {/* Headings */}
  <div className="flex flex-col mb-4 sm:mb-0">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
      Trackers Connected
    </h3>
    <p className="text-xs sm:text-sm md:text-base text-gray-600">
      3 Active Connections
    </p>
  </div>

  {/* Stacked Images */}
  <div className="flex items-center">
    <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
      <img
        src={Image1}
        alt="Icon 1"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full border-2 p-1"
      />
      <img
        src={Image2}
        alt="Icon 2"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full border-2 p-1"
      />
      <img
        src={Image3}
        alt="Icon 3"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full border-2 p-1"
      />
    </div>

    {/* Dots */}
    <div className="flex ml-3 md:ml-4 space-x-1">
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full"></span>
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full"></span>
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full"></span>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Card;
