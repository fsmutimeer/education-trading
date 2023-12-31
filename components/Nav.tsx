'use client'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import { Logo } from '@/components';

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


  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [nav, setNav] = useState(false);
  useEffect(() => {

    const handleWindowResize = () => {
      if (window.innerWidth >= 767) {
        document.body.style.overflowY = 'auto';
      } else {
        document.body.style.overflowY = isOpen ? 'hidden' : 'scroll';
      }
    };

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    handleWindowResize();

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', handleWindowResize);
    setIsLoggedIn(!!localStorage.getItem('jwtToken'));

    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('resize', handleWindowResize);

      // document.body.style.overflowY = 'scroll';
    };
  }, [nav, isOpen]);

  const logout = () => {
    localStorage.removeItem("jwtToken")
    router.push("/");
    if (isOpen) {
      toggleMenu()
    }
  }

  return (
    <>
      <div
        className={
          nav
            ? 'bg-[#1F2125] w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 border-b-2 border-gray-600 '
            : 'w-full sticky top-0 left-0 right-0  flex h-[80px] z-30 bg-transparent '
        }
      >
        <nav className="container mx-auto w-full md:w-[80%] flex md: justify-between lg:justify-center items-center pt-[1rem] ">
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
                  className={`tracking-widest p-2 text-md active:text-orange-600 font-normal  active:bg-violet-700 
                  ${pathname == `${ele.route.toLowerCase()}`
                      ? 'text-orange-400'
                      : ''
                    }
                  `}
                >
                  {ele.title.toUpperCase()}
                </Link>
              </li>
            ))}
            {isLoggedIn ? (
              // Show "Go to Dashboard" link if the user is logged in
              <>
                <Link
                  href="/dashboard"
                  className="tracking-widest text-md bg-orange-400 px-4 py-1 text-slate-950 rounded-lg hover:bg-orange-500  transition-all duration-300 hover:text-whitetransition-all duration-300"
                >
                  Dashboard
                </Link>
                <p className="text-gray-100 block px-4 py-2 text-sm hover:text-orange-400 transition-all duration-300 cursor-pointer" onClick={logout}>Logout</p>
              </>
            ) : (
              // Show "LOGIN" link if the user is not logged in
              <Link
                href="/login"
                className="tracking-widest text-md border bg-white px-4 py-1 text-slate-950 rounded-lg hover:bg-slate-300 hover:text-white"
              >
                LOGIN
              </Link>)
            }

          </ul>
          <button className="md:hidden " onClick={toggleMenu}>
            <RxHamburgerMenu className="h-[30px] w-[30px] mr-7 text-white cursor-pointer transition duration-500 ease-in-out" />
          </button>
          {/* modile screen */}
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#2C2F34] fixed inset-y-0 w-full z-30">
          <div className="flex justify-end p-8">
            <RiCloseFill
              onClick={toggleMenu}
              className="h-[30px] w-[30px] text-white cursor-pointer transition duration-500 ease-in-out"
            />
          </div>

          <ul className=" flex flex-col gap-4 p-8 justify-center items-center  list-none text-gray-200  ">
            {menu.map((ele) => (
              <li key={ele.title}>
                <Link
                  onClick={toggleMenu}
                  href={ele.route.toLowerCase()}
                  className={`block py-4 px-4 tracking-widest text-sm font-normal border-b-[1px] border-gray-400 ${pathname == `${ele.route.toLowerCase()}`
                    ? 'text-orange-400'
                    : ''
                    }`}
                >
                  {ele.title.toUpperCase()}
                </Link>
              </li>
            ))}
            {isLoggedIn ? (
              // Show "Go to Dashboard" link if the user is logged in
              <>
                <Link
                  href="/dashboard"
                  className="tracking-widest text-md bg-orange-400 px-4 py-1 text-slate-950 rounded-lg hover:bg-orange-500  transition-all duration-300 hover:text-whitetransition-all duration-300"
                >
                  Dashboard
                </Link>
                <p className="text-gray-100 block px-4 py-2 text-sm hover:text-orange-400 transition-all duration-300 cursor-pointer" onClick={logout}>Logout</p>
              </>
            ) : (
              // Show "LOGIN" link if the user is not logged in
              <Link
                onClick={toggleMenu}
                href="/login"
                className="tracking-widest text-md border bg-white px-4 py-1 text-slate-950 rounded-lg hover:bg-slate-300 hover:text-white"
              >
                LOGIN
              </Link>)
            }

          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
