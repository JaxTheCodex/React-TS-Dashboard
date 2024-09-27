import React from 'react';
import Card from '../components/Card';
import Graph from '../components/Graph';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { dummyData } from './data';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      {/* Main content takes full width on small screens and 70% on medium/large screens */}
      <div className="w-full md:w-7/10 p-4 md:p-8">
        <Navbar />
        <div className="mt-2">
          {/* Rendering the card component with dummyData */}
          <Card 
            title={dummyData[0].title} 
            image={dummyData[0].image} 
            description={dummyData[0].description} 
            price={dummyData[0].price} 
          />
        </div>
        <div className="mt-2">
          <Graph />
        </div>
      </div>

      {/* Sidebar takes full width on small screens and 30% on medium/large screens */}
      <div className="w-full md:w-3/10 sm-w-full h-full md:h-screen bg-white">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
