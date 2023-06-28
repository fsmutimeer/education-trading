import Image from 'next/image';
import React from 'react';

const about = () => {
  return (
    <>
      <div className="top-80 bg-[url('/bg.png')]  h-[500px] bg-cover bg-no-repeat bg-center bg-fixed flex items-center">
        <div className="flex container mx-auto flex-wrap w-[80%] items-center gap-6 p-4 ">
          <h2 className="text-6xl text-white mx-auto text-center">
            Your Journey <span className="text-orange-400">Matters</span>.
          </h2>
        </div>
      </div>
      {/* Page 3 */}
      <div className="flex justify-between bg-[#1F2125] h-[972px] w-full">
        <div className="container mx-auto w-[80%] flex-col gap-8">
          <div className="flex">
            <div className="w-[50%]">
              <Image
                alt="about image"
                src="/about.jpg"
                height={350}
                width={550}
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-white text-4xl pt-4">
                <span className="text-orange-400">More</span> than just a
                Community.
              </h2>
              <p className="text-gray-400 text-md pt-4">
                The Trading Room was created with the goal of developing
                individuals into the best version of themselves both in trading
                & in the real world. Our Roadmap created will help you becomes
                an unrecognizable person in the time you spend with us.
              </p>
              <p className="text-gray-400 text-md pt-4">
                We do not believe in setting time specific goals when it comes
                to trading. Thus your roadmap is split into phases, take them as
                you may but remember ultimately it all lies in your hands.
              </p>
            </div>
          </div>
          <div className="flex pt-8 mt-8 gap-12 space-x-2 space-y-8"></div>
        </div>
      </div>
    </>
  );
};

export default about;
