
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useAuth from '../auth/useAuth';
import { userLogin } from '../api/api';
const login = () => {
  useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    setErrorMessage('');
    e.preventDefault();
    try {
      const result = await userLogin(username, password, router);
      if (result) {
        if (result.status === 200) {
          const { access_token } = await result.json();
          localStorage.setItem('jwtToken', access_token);
          router.push('/dashboard');
        }
        else if (result.status === 400) {
          const res = await result.json()
          setPassword('')
          setUsername('')
          setErrorMessage(res.message);

        }

      }
    } catch (error: any) {
      setPassword('')
      setUsername('')
      setErrorMessage("Check your internet connection and try again!");
    }

  };


  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen bg-[#1F2125] pt-12 pb-12">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/logo.png" alt="Login Image" width={800} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full p-8 max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome back!</h1>
            <p className="mt-2 text-white">Please sign in to your account.</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block font-bold text-gray-400">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                type="text"
                placeholder="Enter your username"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {errorMessage !== null ? <p className='text-red-500'>{errorMessage}</p> : ""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
