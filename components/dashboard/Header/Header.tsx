import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';
import { BiChevronDown, BiUser } from 'react-icons/bi';
import { FaChevronCircleDown } from 'react-icons/fa';
import { ImOmega } from 'react-icons/im';

const Header = () => {
  return (
    <header className="fixed top-0 bg-[#1F2125] mx-auto w-full flex h-[80px] z-30 border-b-2 border-gray-600 ">
      <nav className="container mx-auto w-full  flex justify-between bg-green ">
        {/* Logo */}
        <div className="flex">
          <Link href="/dashboard">
            <Logo />
          </Link>
          <div className="h-[80px] w-[1.5px] bg-gray-600"></div>
        </div>
        <div className="flex justify-between items-center w-[10%]">
          <div className="h-[80px] w-[1.5px] bg-gray-600"></div>
          <ImOmega className="text-white h-[20px] w-[20px] " />
          <div className="flex items-center w-[50%]">
            <BiUser className="text-white h-[20px] w-[20px]" />
            <BiChevronDown className="text-gray-50 h-[20px] w-[20px]" />
          </div>
        </div>
      </nav>
    
    </header>
  );
};

export default Header;