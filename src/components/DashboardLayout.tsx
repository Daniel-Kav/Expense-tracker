import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, CogIcon, CreditCardIcon, LogoutIcon } from '@heroicons/react/outline';

const DashboardLayout: React.FC = () => {
  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Expense Management System</h1>
        </div>
        <nav className="mt-6 space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/set-budget" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <ChartBarIcon className="w-5 h-5 mr-3" />
            Set Budget
          </Link>
          <Link to="/expenses" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <CreditCardIcon className="w-5 h-5 mr-3" />
            Expenses
          </Link>
          <Link to="/add-expense" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <HomeIcon className="w-5 h-5 mr-3" />
            Add Expense
          </Link>
          <Link to="/manage-expenses" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <CogIcon className="w-5 h-5 mr-3" />
            Manage Expenses
          </Link>
          <Link to="/expense-report" className="flex items-center px-4 py-2 hover:bg-blue-500">
            <ChartBarIcon className="w-5 h-5 mr-3" />
            Expense Report
          </Link>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-center bg-red-500 hover:bg-red-600 rounded-md"
          >
            <LogoutIcon className="w-5 h-5 inline-block mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Expense Management System</h1>
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
          <div className="p-4 bg-purple-500 text-white rounded shadow">
            <h2 className="text-lg font-semibold">Last 30 Days' Expenses</h2>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="p-4 bg-gray-700 text-white rounded shadow">
            <h2 className="text-lg font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded shadow">
            <h2 className="text-lg font-semibold">Budget Left</h2>
            <p className="text-2xl font-bold">Budget Not Set</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
