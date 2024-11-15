import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, CogIcon, CreditCardIcon, UserGroupIcon, LogoutIcon } from '@heroicons/react/outline';

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-[#23b3c9]">ExpenseMS</h1>
        </div>
        <nav className="mt-8">
          <Link to="/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#007bff]">
            <HomeIcon className="w-5 h-5 inline-block mr-2" />
            Overview
          </Link>
          <Link to="/dashboard/expenses" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#007bff]">
            <CreditCardIcon className="w-5 h-5 inline-block mr-2" />
            Expenses
          </Link>
          <Link to="/dashboard/reports" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#007bff]">
            <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
            Reports
          </Link>
          <Link to="/dashboard/team" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#007bff]">
            <UserGroupIcon className="w-5 h-5 inline-block mr-2" />
            Team
          </Link>
          <Link to="/dashboard/settings" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#007bff]">
            <CogIcon className="w-5 h-5 inline-block mr-2" />
            Settings
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#007bff] rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff]"
          >
            <LogoutIcon className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;