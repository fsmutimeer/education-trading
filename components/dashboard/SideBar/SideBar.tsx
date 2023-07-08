'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBrain, FaDollarSign } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ImOmega } from 'react-icons/im';
import { RiTrophyFill } from 'react-icons/ri';

const Sidebar = () => {
  const menu = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: <ImOmega className="text-white h-8 w-8" />,
    },
    {
      title: 'The Archive',
      route: '/dashboard/archive',
      icon: <FaDollarSign className="text-white h-8 w-8" />,
    },
    {
      title: 'Forex',
      route: '/dashboard/forex',
      icon: <FaBrain className="text-white h-8 w-8" />,
    },
    {
      title: 'Indices',
      route: '/dashboard/indices',
      icon: <FaBrain className="text-white h-8 w-8" />,
    },
    {
      title: 'Metamorphosis',
      route: '/dashboard/metamorposis',
      icon: <RiTrophyFill className="text-white h-8 w-8" />,
    },
  ];

  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-30 ${
        isExpanded ? 'w-[250px]' : 'w-[50px]'
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
            <FiChevronLeft className="text-white h-8 w-8" />
          ) : (
            <FiChevronRight className="text-white h-8 w-8 flex-1" />
          )}
        </button>
      </div>

      <ul className="flex-col gap- list-none text-gray-200 ml-auto pl-2">
        {menu.map((ele) => (
          <li key={ele.title}>
            <Link
              onClick={toggleSidebar}
              href={ele.route.toLowerCase()}
              className={`flex gap-8 tracking-widest pt-2 text-md  font-normal
                  ${
                    pathname == `${ele.route.toLowerCase()}`
                      ? 'text-orange-400'
                      : ''
                  }
                  `}
            >
              {isExpanded ? (
                <>
                  {ele.icon} {ele.title.toUpperCase()}
                </>
              ) : (
                ele.icon
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
