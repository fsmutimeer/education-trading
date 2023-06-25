import { Logo } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
    <div
      className={
        nav
          ? 'bg-[#1F2125] w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 border-b-2 border-gray-600 '
          : 'w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 bg-transparent '
      }
    >
      <nav className="container mx-auto w-[80%]   flex justify-center items-center pt-[1rem] ">
        {/* Logo */}
        <Link href="/" className="">
          <Logo />
        </Link>
        {/* Title */}
        {/* <Link href="/">
          <Image src="/logowithttr.jpg" width={95} height={95} alt="ttr logo" />
        </Link> */}
        {/* Navigatin Menu */}
        <ul className="flex gap-6 list-none text-gray-200 ml-auto ">
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
      </nav>
    </div>
  );
};

export default Nav;
