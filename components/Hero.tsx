import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaCheck,
  FaGalacticRepublic,
  FaPlus,
  FaRegHandshake,
} from 'react-icons/fa';
import { MdOutlineDownloading } from 'react-icons/md';
import { GiBrain, GiLadder } from 'react-icons/gi';
import { Accordion, Card } from '@/components';
const Hero = () => {
  const [list, setList] = useState([
    {
      title: 'Introduction',
      active: 1,
    },
    {
      title: 'Introduction',
    },
    {
      title: 'Introduction',
    },
    {
      title: 'Introduction',
    },
    {
      title: 'Introduction',
    },
  ]);
  return (
    <div>
      {/* Page 1 */}
      <div className="top-0 bg-[url('/bg.svg')]  h-[972px] bg-cover bg-no-repeat bg-center bg-fixed flex items-center">
        <div className="flex container mx-auto flex-wrap w-[80%] items-center gap-6 p-4 ">
          {/* Left */}
          <div className=" gap-8 flex-col w-[38%] h-[100%]">
            <h1 className="text-4xl text-white py-2">Second Generation, </h1>
            <h1 className="text-4xl text-white py-2">A new Era Beckons.</h1>
            <div className="bg-white h-[4px] w-[15em] my-4"></div>
            <div className="py-8">
              <Link href="/join" className="px-4 py-2 text-md text-slate-950 bg-orange-500 rounded-lg cursor-pointer">
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
      {/* Page 2  */}
      <div className="mx-auto flex-col bg-slate-800 h-[972px] w-full">
        <div className="w-[80%] mx-auto flex-col flex-wrap justify-center items-center text-center ">
          {/* Title */}
          <div className="pt-[4rem]">
            <h2 className="text-white text-4xl pt-4">
              An <span className="text-orange-400">Objective</span> &{' '}
              <span className="text-orange-400">Psychological</span> Approach
            </h2>
            <div className="flex flex-wrap justify-center items-center]">
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
      <div className="flex justify-between bg-slate-800 h-[972px] w-full">
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
      <div className="flex-col bg-slate-800 h-[972px] w-screen ">
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
            <div className="flex justify-center flex-wrap items-center]">
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
      <div className="flex-col bg-slate-800 h-[972px] w-screen flex-wrap">
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
      <div className="flex-col bg-slate-800 h-auto w-screen flex-wrap">
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
      <div className="flex-col bg-slate-800 h-auto w-screen flex-wrap">
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
    
      {/* Page 9  */}
      <div className="flex-col bg-slate-800 h-auto w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-[40%] ">
            <h2 className="text-white text-4xl pt-4 p-4">
              Here's what our{' '}
              <span className="text-orange-400 mr-2">Network</span>have to say.
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[80%] pt-8 mx-auto justify-between items-center">
            {' '}
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
          </div>
        </div>
      </div>
      {/* Page 10  */}
      <div className="flex-col bg-slate-800 h-[972px] w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-[40%] ">
            <h2 className="text-white text-4xl pt-4 p-4">
              <span className="text-orange-400 mr-2">Live</span>Recorded Trades
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[80%] pt-8 mx-auto justify-between items-center">
            {' '}
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
          </div>
        </div>
      </div>
      {/* Page 11  */}
      <div className="flex-col bg-slate-800 h-auto w-screen">
        <div className=" container  mx-auto w-[80%] flex gap-8  ">
          {/* Left */}
          <div className="flex w-[70%] flex-wrap">
            <div className="flex justify-between items-center w-[100%] flex-wrap">
              <div className="flex  gap-8">
                <div className="">
                  <Image
                    src="/mulberies.jpg"
                    height={20}
                    width={100}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col flex-wrap justify-around">
                  <h5 className="text-orange-400 font-bold">Approach 1</h5>
                  <h5 className="text-white font-bold">
                    {' '}
                    <span className="text-orange-400">Week 3 </span> / Liquidty
                    Types
                  </h5>
                  {/* Title */}
                </div>
              </div>
              <div className="">
                {' '}
                <button className=" p-2 pl-4 pr-4 bg-slate-50 text-slate-600 rounded-[4rem]">
                  Homework
                </button>
              </div>
            </div>

            {/* Video tag*/}
            <div className="flex h-[25rem] w-[100%] bg-slate-300 mt-8"></div>
            {/* Overview and desc tag */}
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex gap-3">
                <div className="mb-2">
                  <h4 className="inline-block text-white text-2xl">Overview</h4>
                  <hr className="border-b-1 mt-2 border-gray-500" />
                </div>
                <h4 className="inline-block text-slate-600 text-2xl">Notes</h4>
              </div>

              {/* Paragraph */}
              <div className="flex flex-wrap w-[77%] gap-4">
                <p className="text-white">
                  We've been in your exact shoes & we know exactly how you feel.
                  After joining numerous communities you're still struggling to
                  either findconsistency, you feel you're lacking something,
                  you're struggling psychologically & etc.
                </p>
                <p className="text-white">
                  The Trading Room Network was created to change what it means
                  to be in a trading community. We're not only here to teach
                  youconcepts but to teach you properly tested objective
                  strategies with a psychological edge.
                </p>
              </div>
            </div>
            {/* Resource tage */}
            <div className="flex flex-wrap justify-between w-[60%] mt-6 mb-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-xl">Resources</h4>
                <div className="flex bg-slate-900 h-[3rem] w-[10rem] rounded-md"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-xl">Downloads</h4>
                <div className="flex bg-slate-900 h-[3rem] w-[100%] rounded-md">
                  <div className="flex justify-center items-center p-4">
                    <h4 className="text-slate-300 pt-5 pb-5 p-4">
                      Lesson 1-PDF.zip
                    </h4>
                    <MdOutlineDownloading className="h-6 w-6 text-black bg-orange-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="overflow-hidden flex justify-center mx-auto   w-[30%]">
            <div className="list">
              {list.map((item, key) => (
                <Accordion key={key} datas={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  End tage of main container */}
    </div>
  );
};

export default Hero;
