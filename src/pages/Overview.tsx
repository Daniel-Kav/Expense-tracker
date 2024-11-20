import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        <div className="p-4 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Today's Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Yesterday's Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-orange-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Last 7 Days' Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-purple-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Last 30 Days' Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Total Expenses</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <h2 className="text-md font-medium mb-2">Budget Left</h2>
          <p className="text-2xl font-bold">Budget Not Set</p>
        </div>
      </div>
      <footer className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Expense Management System
      </footer>
    </div>
  );
};

export default Overview;
