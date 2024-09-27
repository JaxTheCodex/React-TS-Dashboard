import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataThisMonth = [
  { name: 'Week 1', MaximumOfFocus: 4000, MinimumOfFocus: 2400 },
  { name: 'Week 2', MaximumOfFocus: 3000, MinimumOfFocus: 5398 },
  { name: 'Week 3', MaximumOfFocus: 8000, MinimumOfFocus: 2800 },
  { name: 'Week 4', MaximumOfFocus: 2780, MinimumOfFocus: 3908 },
  { name: 'Week 5', MaximumOfFocus: 8890, MinimumOfFocus: 4800 },
];

const dataLastMonth = [
  { name: 'Week 1', MaximumOfFocus: 3200, MinimumOfFocus: 2100 },
  { name: 'Week 2', MaximumOfFocus: 2800, MinimumOfFocus: 1500 },
  { name: 'Week 3', MaximumOfFocus: 7500, MinimumOfFocus: 2000 },
  { name: 'Week 4', MaximumOfFocus: 2900, MinimumOfFocus: 3500 },
  { name: 'Week 5', MaximumOfFocus: 1700, MinimumOfFocus: 4600 },
];

const Graph: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('This month');
  
  const graphData = selectedRange === 'This month' ? dataThisMonth : dataLastMonth;

  return (
    <>
      {/* Heading and subheading with dropdown */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Focusing</h1>
          <h2 className="text-lg text-gray-600">Productivity analysis</h2>
        </div>
        <div>
          <label htmlFor="range" className="mr-2 font-semibold">Range:</label>
          <select
            id="range"
            className="border rounded-md px-2 py-1"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <option value="This month">This month</option>
            <option value="Last month">Last month</option>
          </select>
        </div>
      </div>

      {/* LineChart displaying the data */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="MaximumOfFocus" stroke="#0000ff" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="MinimumOfFocus" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between items-end mt-4 w-full">
  {/* Left-aligned labels for Maximum and Minimum of Focus */}
  <div className="text-left">
    <div className="flex items-center space-x-4">
      {/* Red box and label */}
      <div className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-red-500 inline-block"></span>
        <span className='text-base sm:text-xs md:text-base'>Maximum of Focus</span>
      </div>

      {/* Blue box and label */}
      <div className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-blue-500 inline-block"></span>
        <span className='text-base sm:text-xs md:text-base'>Minimum of Focus</span>
      </div>
    </div>
  </div>

  {/* Right-aligned percentage and text */}
  <div className="text-right">
    <p className="md:text-5xl font-bold sm:text-base">41%</p>
    <p className="text-sm text-gray-500">Avg connection</p>
  </div>
</div>

    </>
  );
};

export default Graph;
