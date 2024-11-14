import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { username, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#23b3c9] text-center mb-8">
            Expense Management System
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="claire"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23b3c9] focus:border-[#23b3c9] transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23b3c9] focus:border-[#23b3c9] transition duration-150 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-opacity-50 transition duration-200 ease-in-out"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#007bff] hover:text-[#0056b3] hover:underline">
              Sign Up Now
            </a>
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="/placeholder.svg"
            alt="Expense Management Illustration"
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;