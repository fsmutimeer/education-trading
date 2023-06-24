import Image from 'next/image';
import React from 'react';

const login = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen bg-gray-700">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/logo.png" alt="Login Image" width={800} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome back!</h1>
            <p className="mt-2 text-white">Please sign in to your account.</p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-400">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-grey-500 focus:ring focus:ring-grau-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-400"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-gray-500 focus:ring focus:ring-gray-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-indigo focus:border-gray-700"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;