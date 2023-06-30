import { Logo } from '@/components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
const menu = [
  {
    title: 'home',
    route: '/',
  },
  {
    title: 'Join Now',
    route: '/join',
  },
  {
    title: 'about us',
    route: '/about',
  },
  {
    title: 'faq',
    route: '/faq',
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [nav, setNav] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [nav]);

  return (
    <>
      <div
        className={
          nav
            ? 'bg-[#1F2125] w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 border-b-2 border-gray-600 '
            : 'w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 bg-transparent '
        }
      >
        <nav className="container mx-auto w-[80%] flex md: justify-between lg:justify-center items-center pt-[1rem] ">
          {/* Logo */}
          <Link href="/" className="">
            <Logo />
          </Link>
          {/* Title */}
          {/* <Link href="/">
          <Image src="/logowithttr.jpg" width={95} height={95} alt="ttr logo" />
        </Link> */}
          {/* Navigatin Menu */}
          <ul className="hidden md:flex gap-6 list-none text-gray-200 ml-auto ">
            {menu.map((ele) => (
              <li key={ele.title}>
                <Link
                  href={ele.route.toLowerCase()}
                  className="tracking-widest p-2 text-md active:text-orange-600 font-normal  active:bg-violet-700 "
                >
                  {ele.title.toUpperCase()}
                </Link>
              </li>
            ))}
            <Link
              href="/login"
              className="tracking-widest text-md border bg-white px-4 py-1 text-slate-950 rounded-lg hover:bg-slate-300 hover:text-white"
            >
              LOGIN
            </Link>
          </ul>
          <button className="md:hidden " onClick={toggleMenu}>
            {isOpen ? (
              <RiCloseFill className="h-[30px] w-[30px] text-white cursor-pointer transition duration-500 ease-in-out" />
            ) : (
              <RxHamburgerMenu className="h-[30px] w-[30px] text-white cursor-pointer transition duration-500 ease-in-out" />
            )}
          </button>
          {/* modile screen */}
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden absolute  bg-[#2C2F34] w-screen h-auto transition duration-500 ease-in-out">
          <ul className=" flex flex-col gap-4 p-8 items-center list-none text-gray-200  ">
            {menu.map((ele) => (
              <li key={ele.title}>
                <Link
                  onClick={toggleMenu}
                  href={ele.route.toLowerCase()}
                  className=" py-4 px-4 tracking-widest text-sm font-normal border-b-[1px] border-gray-400"
                >
                  {ele.title.toUpperCase()}
                </Link>
              </li>
            ))}
            <Link
              href="/login"
              className="py-2 px-4 max-w-xs text-sm  border bg-white  text-slate-950 rounded-lg"
            >
              LOGIN
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
