import Link from 'next/link';
import React from 'react';
import { Logo } from '@/components';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F2125] text-center text-white border-t-2 border-t-gray-600">
      <div className="container  mx-auto pt-6 justify-between w-[80%] ">
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto ">
          <div className="mb-2 text-start items-start md:items-center">
            <ul className="mb-0 list-none">
              <li>
                <Link href="/" className="text-white capitalize">
                  <Logo />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-start items-start md:items-center ">
            <h5 className="mb-2.5 font-normal text-orange-400">Quick Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link href="/" className="text-white capitalize">
                  home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white capitalize">
                  join now
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white capitalize">
                  about us{' '}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white capitalize">
                  Q&A{' '}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white capitalize">
                  login{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 flex flex-col items-start md:items-center ">
            <h5 className="mb-2.5 font-normal text-orange-400">Socials</h5>

            <ul className="mb-0 list-none">
              <li className="flex">
                <FaInstagram className="text-white text-1xl mr-1" />
                <FaTwitter className="text-white text-1xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center p-4 bg-[#1F2125]">
        Copyright © 2023
        <a className="text-white" href="https://tailwind-elements.com/">
          The Trading Room
        </a>
      </div>
    </footer>
  );
};

export default Footer;
