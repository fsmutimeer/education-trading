'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBrain } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ImOmega } from 'react-icons/im';
import { SiMarketo } from 'react-icons/si';
import { BsSpeedometer2 } from 'react-icons/bs';
import { GiDiamondTrophy } from 'react-icons/gi';

const Sidebar = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-30 ${
        isExpanded ? 'w-[250px]' : 'w-[1px]'
      } bg-gray-900 text-white transition-all duration-600 ease-in-out`}
      style={{ marginTop: '80px' }}
    >
      <div className="flex items-center justify-between p-2">
        {isExpanded && <div className=""></div>}
        <button
          className="text-white focus:outline-none focus:text-white"
          onClick={toggleSidebar}
        >
          {isExpanded ? (
            <FiChevronLeft className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          ) : (
            <span className="flex justify-center text-center text-orange-400 hover:text-orange-600 transition-all ease-in-out duration-300  text-md font-bold">
              Menu
              <FiChevronRight className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200 flex-1 " />
            </span>
          )}
        </button>
      </div>

      <ul className="flex-col gap- list-none text-gray-200 ml-auto pl-2">
        {isExpanded && (
          <p className="hidden md:block pt-4 bp-4 m-2 ml-0 text-lg text-gray-600">
            Dashboard
          </p>
        )}
        <Link
          onClick={toggleSidebar}
          href="/dashboard/archive"
          className={`flex gap-8 tracking-widest pt-2 text-md  font-normal hover:text-orange-400  transition-all ease-in-out duration-200
              ${pathname == `/dashboard/archive` ? 'text-orange-400' : ''}
              `}
        >
          {isExpanded ? (
            <>
              {/* {ele.icon} {ele.title.toUpperCase()} */}
              <ImOmega className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
              The Archive
            </>
          ) : (
            <ImOmega className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          )}
        </Link>
        {isExpanded && (
          <p className="hidden md:block pt-4 bp-4 m-2 ml-0 text-lg text-gray-600">
            Program
          </p>
        )}
        <Link
          onClick={toggleSidebar}
          href="/dashboard/forex"
          className={`flex gap-8 tracking-widest pt-2 text-md  font-normal hover:text-orange-400  transition-all ease-in-out duration-200
              ${pathname == `/dashboard/forex` ? 'text-orange-400' : ''}
              `}
        >
          {isExpanded ? (
            <>
              <SiMarketo className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
              Forex
            </>
          ) : (
            <SiMarketo className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          )}
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/dashboard/forex"
          className={`flex gap-8 tracking-widest pt-2 text-md  font-normal hover:text-orange-400  transition-all ease-in-out duration-200
              ${pathname == `/dashboard/forex` ? 'text-orange-400' : ''}
              `}
        >
          {isExpanded ? (
            <>
              <BsSpeedometer2 className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
              Indices
            </>
          ) : (
            <BsSpeedometer2 className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          )}
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/dashboard/forex"
          className={`flex gap-8 tracking-widest pt-2 text-md  font-normal hover:text-orange-400  transition-all ease-in-out duration-200
              ${pathname == `/dashboard/forex` ? 'text-orange-400' : ''}
              `}
        >
          {isExpanded ? (
            <>
              <FaBrain className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
              Metamorphosis
            </>
          ) : (
            <FaBrain className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          )}
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/dashboard/forex"
          className={`flex gap-8 tracking-widest pt-2 text-md  font-normal hover:text-orange-400  transition-all ease-in-out duration-200
              ${pathname == `/dashboard/forex` ? 'text-orange-400' : ''}
              `}
        >
          {isExpanded ? (
            <>
              <GiDiamondTrophy className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
              Mastery
            </>
          ) : (
            <GiDiamondTrophy className="text-white h-8 w-8 hover:text-orange-400  transition-all ease-in-out duration-200" />
          )}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
