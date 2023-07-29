'use client';
import Link from 'next/link';
import React, { useState ,useEffect} from 'react';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { UserProfile } from '@/app/api/types';
import { getUserProfile } from '@/app/api/api';


const DropdownMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<UserProfile | null>(null);


  useEffect(() => {
    getUserProfile(router).then((userProfile) => {
      setAuthenticatedUser(userProfile);
    });
  }, [router])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout= ()=> {
    localStorage.removeItem("jwtToken")
    router.push("/")
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <section
          className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white cursor-pointer "
          onClick={toggleMenu}
        >
          <FaUserCircle className="h-6 w-6 hover:text-orange-400 transition-all duration-300" />
          <p>{authenticatedUser?.username}</p>
          <FaChevronDown className='hover:text-orange-400 transition-all duration-300'/>
        </section>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[12rem] origin-top-right rounded-md bg-[#2C2F34] shadow-lg  focus:outline-none">
          <div className="py-1" role="none">
            <Link
              onClick={toggleMenu}
              href="#"
              className="text-gray-100 block px-4 py-2 text-sm hover:text-orange-400 transition-all duration-300"
            >
              Account Details
            </Link>
            <Link
              onClick={toggleMenu}
              href="#"
              className="text-gray-100 block px-4 py-2 text-sm hover:text-orange-400 transition-all duration-300"
            >
              Manage Subscription
            </Link>
            <p className="text-gray-100 block px-4 py-2 text-sm hover:text-orange-400 transition-all duration-300 cursor-pointer" onClick={logout}>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
