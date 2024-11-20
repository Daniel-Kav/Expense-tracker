import React from 'react';

const Overview: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-red-500 text-white rounded shadow">
          <h2 className="text-lg font-semibold">Today's Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-blue-500 text-white rounded shadow">
          <h2 className="text-lg font-semibold">Yesterday's Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-orange-500 text-white rounded shadow">
          <h2 className="text-lg font-semibold">Last 7 Days' Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
