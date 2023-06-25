import Link from 'next/link';
import React from 'react';
import { Logo } from '@/components';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F2125] text-center text-white border-t-2 border-t-gray-600">
      <div className="container  mx-auto pt-6 justify-between w-[80%] ">
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto"> */}
        <div className="flex mx-auto justify-between ">
          <div className="mb-2 text-start justify-start w-[10%]">
            <ul className="mb-0 list-none">
              <li>
                <Link href="/" className="text-white capitalize">
                  <Logo />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-start w-[20%]">
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
          <div className="p-4 text-center bg-[#1F2125] flex justify-start items-end w-[60%]">
            Copyright © 2023
            <a className="text-white" href="https://tailwind-elements.com/">
              The Trading Room
            </a>
          </div>
          <div className="mb-6 ">
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
    </footer>
  );
};

export default Footer;
