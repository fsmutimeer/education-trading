import Link from 'next/link';
import React from 'react';

const Hero = () => {

  return (
    <div>
      {/* Page 1 */}
      <div className="top-0 bg-[url('/bg.png')]  h-[972px] bg-cover bg-no-repeat bg-center bg-fixed flex items-center">
        <div className="flex container mx-auto flex-wrap w-[80%] items-center gap-6 p-4 ">
          {/* Left */}
          <div className=" gap-8 flex-col w-[38%] h-[100%]">
            <h1 className="text-4xl text-white py-2">Second Generation, </h1>
            <h1 className="text-4xl text-white py-2">A new Era Beckons.</h1>
            <div className="bg-white h-[4px] w-[15em] my-4"></div>
            <div className="py-8">
              <Link
                href="/join"
                className="px-4 py-2 text-md text-slate-950 bg-orange-500 rounded-lg cursor-pointer"
              >
                JOIN NOW
              </Link>
            </div>{' '}
          </div>
          {/* Right */}
          <div className=" gap-5 p-4 flex-col w-[55%] items-center flex justify-end">
            <div className="h-[25rem] w-[100%] bg-gray-400 rounded-[2.5rem]  "></div>
          </div>
        </div>
      </div>

      {/*  End tage of main container */}
    </div>
  );
};

export default Hero;
