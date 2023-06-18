import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGalacticRepublic, FaLaptop, FaRegHandshake } from 'react-icons/fa';
import { GiBrain, GiLadder } from 'react-icons/gi';
import { Card } from '@/components';
const Hero = () => {
  return (
    <div>
      {/* Page 1 */}
      <div className="top-0 bg-[url('/bg.svg')]  h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center">
        <div className="flex container mx-auto  w-[80%] items-center gap-6 p-4 ">
          {/* Left */}
          <div className=" gap-8 flex-col w-[38%]">
            <h1 className="text-4xl text-white py-2">Second Generation, </h1>
            <h1 className="text-4xl text-white py-2">A new Era Beckons.</h1>
            <div className="bg-white h-[4px] w-[15em] my-4"></div>
            <div className="py-8">
              <button className="px-4 py-2 text-md text-slate-950 bg-orange-500 rounded-lg cursor-pointer">
                JOIN NOW
              </button>
            </div>{' '}
          </div>
          {/* Right */}
          <div className=" gap-5 p-4 flex-col w-[55%] items-center flex justify-end">
            <div className="h-[25rem] w-[100%] bg-gray-400 rounded-[2.5rem]  "></div>
          </div>
        </div>
      </div>
      {/* Page 2  */}
      <div className="mx-auto flex-col bg-slate-800 h-screen w-full">
        <div className="w-[80%] mx-auto flex-col justify-center items-center text-center ">
          {/* Title */}
          <div className="pt-[4rem]">
            <h2 className="text-white text-4xl pt-4">
              An <span className="text-orange-400">Objective</span> &{' '}
              <span className="text-orange-400">Psychological</span> Approach
            </h2>
            <div className="flex justify-center items-center]">
              <div className="bg-slate-500 h-[1.5px] w-[27em] my-4 "></div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex-col justify-center items-center space-y-[4rem] ">
            {/* first */}
            <div className="flex justify-center items-center gap-[6rem]">
              <div className="flex justify-center items-center p-4">
                <FaGalacticRepublic className="text-white text-6xl mr-5" />
                <p className="text-white text-xl">
                  Second Generation, A new Era Beckons.
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <GiLadder className="text-white text-6xl mr-5" />
                <p className="text-white text-xl">
                  Second Generation, A new Era Beckons.
                </p>
              </div>
            </div>
            {/* first */}
            <div className="flex justify-center items-center gap-[6rem]">
              <div className="flex justify-center items-center p-4">
                <GiBrain className="text-white text-6xl mr-5" />
                <p className="text-white text-xl">
                  Second Generation, A new Era Beckons.
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <FaRegHandshake className="text-white text-6xl mr-5" />
                <p className="text-white text-xl">
                  Second Generation, A new Era Beckons.
                </p>
              </div>
            </div>
          </div>

          {/* Click here */}
          <div className="pt-[4rem]">
            <Link href="/">
              {' '}
              <p className="text-orange-400 text-2xl pt-4">
                Click Here To Find Out More
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className="flex justify-between bg-slate-800 h-screen w-full">
        <div className="container mx-auto w-[80%] flex-col gap-8">
          <div className="flex">
            <div className="w-[50%]">
              <Image
                alt="laptop image"
                src="/laptop.png"
                height={350}
                width={350}
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-white text-4xl pt-4">
                The <span className="text-orange-400">Archive</span>
              </h2>
              <p className="text-white text-xl pt-4">
                Introducing <span className="text-orange-400">The Archive</span>
                , a dashboard that includes all of our collective knowledge
                placed in a structured video format.
              </p>
            </div>
          </div>
          <div className="flex pt-8 mt-8 gap-12 space-x-2 space-y-8">
            <div className="w-[50%]">
              <h2 className="text-white text-4xl pt-4">
                Weekly <span className="text-orange-400">Mastery </span>Network
                Meet-Up
              </h2>
              <p className="text-white text-xl pt-4">
                Introducing Introducing The Archive, your ultimate destination
                for accessing the latest trading content and resources. Here,
                you can stay upated on all the latest happenings, gain a strong
                understanding of technical analysis, and learn essential mindset
                and market fundamentals to help you become a successful trader.
              </p>
            </div>
            <div className="w-[50%]">
              <Image
                alt="image here"
                src="/mulberies.jpg"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page 4  */}
      <div className="flex-col bg-slate-800 h-screen w-screen ">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          <div className="flex pt-8  gap-12 space-x-2">
            <div className="w-[50%]">
              <Image
                alt="image here"
                src="/mulberies.jpg"
                height={1000}
                width={1000}
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-white text-4xl pt-4">
                The <span className="text-orange-400">Mastery </span>Of a
                Connected Network
              </h2>
              <p className="text-white text-xl pt-4">
                Introducing{' '}
                <span className="text-orange-400">The Archive </span> , a
                dashboard that includesall of our collective knowledge placed in
                astructured video format.
              </p>
            </div>
          </div>
          <div className="pt-[4rem] text-center">
            <h2 className="text-white text-6xl pt-4">
              Where <span className="text-orange-400 mr-2">Real</span>Meets
              <span className="text-orange-400 ml-2">Real</span>
            </h2>
            <div className="flex justify-center items-center]">
              <div className="bg-slate-500 h-[1.5px] w-[27em] my-4 "></div>
            </div>
          </div>
          <div className="container mx-auto flex-col justify-center items-center text-center">
            <p className="text-white text-xl pt-4  text-center p-8">
              We've been in your exact shoes & we know exactly how you feel.
              After joining numerous communities you'restill struggling to
              either find consistency, you feel you're lacking something, you're
              struggling psychologically& etc.
            </p>
            <p className="text-white text-xl pt-4 text-center p-8">
              The Trading Room Network was created to change what it means to be
              in a trading community. We're notonly here to teach you concepts
              but to teach you properly tested objective strategies with a
              psychologicaledge
            </p>
          </div>
        </div>
      </div>
      {/* Page 5  */}
      <div className="flex-col bg-slate-800 h-screen w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] text-center">
            <h2 className="text-white text-5xl pt-4">
              <span className="text-orange-400 mr-2">April</span>2023 Trades
              Taken
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[70%] pt-8 mx-auto justify-center items-center">
            {' '}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* Page 6  */}
      <div className="flex-col bg-slate-800 h-screen w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] text-center">
            <h2 className="text-white text-5xl pt-4">
              <span className="text-orange-400 mr-2">May</span>2023 Trades Taken
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[70%] pt-8 mx-auto justify-center items-center">
            {' '}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* Page 7  */}
      <div className="flex-col bg-slate-800 h-screen w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-[40%] ">
            <h2 className="text-white text-5xl pt-4">
              Here's what our{' '}
              <span className="text-orange-400 mr-2">Network</span>have to say.
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[80%] pt-8 mx-auto justify-center items-center">
            {' '}
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[8rem] w-[16rem] bg-slate-300 rounded-[2rem]"></div>
          </div>
        </div>
      </div>
      {/*  End tage of main container */}
    </div>
  );
};

export default Hero;
