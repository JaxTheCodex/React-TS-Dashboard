import React, { useState } from 'react';
import { FaCalendarDay, FaClock, FaArrowUp, FaArrowDown, FaVideo, FaGoogle, FaSkype, FaMicrosoft, FaArrowLeft } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const meetings = [
  {
    event: 'Quick daily meeting',
    day: 'Mon',
    date: '25 Sep, 2024',
    time: '10:00 AM',
    platform: 'Zoom Meeting',
    icon: <FaVideo />,
  },
  {
    event: 'Weekly sync-up',
    day: 'Wed',
    date: '27 Sep, 2024',
    time: '12:00 PM',
    platform: 'Google Meet',
    icon: <FaGoogle />,
  },
  {
    event: 'Project discussion',
    day: 'Fri',
    date: '29 Sep, 2024',
    time: '3:00 PM',
    platform: 'Skype Call',
    icon: <FaSkype />,
  },
  {
    event: 'End of week review',
    day: 'Sat',
    date: '30 Sep, 2024',
    time: '5:00 PM',
    platform: 'Microsoft Teams',
    icon: <FaMicrosoft />,
  },
];

const skills = [
  { name: 'Sports Skills', percentage: 71 },
  { name: 'Blogging', percentage: 92 },
  { name: 'Leadership', percentage: 33 },
  { name: 'Meditation', percentage: 56 },
  { name: 'Philosophy', percentage: 79 },
];

const getRandomArrow = () => (Math.random() > 0.5 ? 'up' : 'down'); // Randomly decide if up or down arrow

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false); // Close the sidebar when back button is clicked
  };

  if (!isOpen) return null; // Sidebar is not rendered when closed

  return (
    <div className="bg-gray-200 p-6 shadow-lg h-screen w-full sm:w-7/10 fixed right-0 flex flex-col md:w-3/10">
      {/* Back Button */}
      <button onClick={handleClose} className="text-gray-500 hover:text-gray-800 mb-4">
        <FaArrowLeft className="text-2xl md:hidden" />
      </button>

      {/* Sidebar Content */}
      <div className="flex-grow overflow-auto flex flex-col">
        {/* Heading: My Meetings */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">My Meetings</h1>
            <FaCalendarDay className="text-4xl bg-white p-2 rounded-full shadow-md" />
          </div>

          {/* Meeting List */}
          <div className="space-y-4 mt-4">
            {meetings.map((meeting, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2 px-4 text-left bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                {/* Day, Date, and Time */}
                <div className="flex flex-col w-1/3">
                  <h4 className="text-base font-semibold text-gray-800">
                    {meeting.day}, {meeting.date}
                  </h4>
                  <p className="text-gray-500">
                    <FaClock className="inline-block mr-2" />
                    {meeting.time}
                  </p>
                </div>

                {/* Event Name and Platform */}
                <div className="flex flex-col items-start w-1/3 text-right">
                  <h4 className="text-base font-semibold text-black-500">{meeting.event}</h4>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-700">{meeting.platform}</span>
                    {meeting.icon}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="ml-2 flex items-center">
                  <GoArrowUpRight className="text-gray-400 hover:text-indigo-600 transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>

          {/* See More Link */}
          <a href="#" className="text-center text-black-600 hover:underline mt-4 block font-semibold">
            See all meetings &gt;
          </a>
        </div>

        {/* Developed Areas Section */}
        <div className="mt-4 mb-8">
          <h2 className="text-2xl font-bold text-indigo-600">Developed Areas</h2>
          <h3 className="text-lg text-gray-500 mb-4">Most common areas of interest</h3>

          {/* Skill Bars */}
          <div className="space-y-10">
            {skills.map((skill, index) => {
              const arrowType = getRandomArrow(); // Get random arrow for each skill
              return (
                <div key={index} className="flex items-center my-10">
                  <span className="text-gray-700 font-bold w-1/4">{skill.name}</span>
                  <div className="w-3/4 bg-gray-200 rounded-full h-2.5 mx-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-500 w-1/6 font-semibold">{skill.percentage}%</span>
                  <span className="font-light">|</span>

                  {/* Conditionally render up or down arrow */}
                  <div className="flex items-center ml-2">
                    {arrowType === 'up' ? (
                      <FaArrowUp className="text-white bg-green-500 p-1 rounded-full hover:bg-green-700 transition-colors duration-200" />
                    ) : (
                      <FaArrowDown className="text-white bg-red-500 p-1 rounded-full hover:bg-red-700 transition-colors duration-200" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
