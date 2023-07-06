'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Hero } from '@/components';
import { FaGalacticRepublic, FaRegHandshake } from 'react-icons/fa';
import { GiBrain, GiLadder } from 'react-icons/gi';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Page 2  */}
      <div className="mx-auto flex-col bg-[#1F2125] h-auto w-full">
        <div className=" w-full md:w-[80%] mx-auto flex-col flex-wrap justify-center items-center text-center ">
          {/* Title */}
          <div className="pt-[4rem]">
            <h2 className="text-white text-2xl pt-4">
              An <span className="text-orange-400">Objective</span> &{' '}
              <span className="text-orange-400">Psychological</span> Approach
            </h2>
            <div className="flex flex-wrap justify-center items-center]">
              <div className="bg-slate-500 h-[1px] md:h-[1.5px] w-[24em] md:w-[27em] my-4 "></div>
            </div>
          </div>
          {/* Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 mt-8 gap-8">
            <div className="flex justify-center items-center p-4">
              <FaGalacticRepublic className="text-white text-5xl md:text-6xl mr-3 md:mr-5" />
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

          {/* Click here */}
          <div className="pt-[4rem] pb-[4rem]">
            <Link href="/">
              {' '}
              <p className="text-orange-400 text-xl md:text-2xl pt-2 md:pt-4">
                Click Here To Find Out More
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className="flex justify-between bg-[#1F2125] h-auto w-full pb-8">
        <div className="container mx-auto  w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* <div className="flex"> */}
          <Image
            alt="laptop image"
            src="/laptop.png"
            height={1000}
            width={1000}
          />
          <div className="w-full">
            <h2 className="text-white text-4xl pt-4">
              The <span className="text-orange-400">Archive</span>
            </h2>
            <p className="text-white text-xl pt-4">
              Introducing <span className="text-orange-400">The Archive</span>,
              a dashboard that includes all of our collective knowledge placed
              in a structured video format.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-white text-4xl pt-4">
              Weekly <span className="text-orange-400">Mastery </span>Network
              Meet-Up
            </h2>
            <p className="text-white text-xl pt-4">
              Introducing Introducing The Archive, your ultimate destination for
              accessing the latest trading content and resources. Here, you can
              stay upated on all the latest happenings, gain a strong
              understanding of technical analysis, and learn essential mindset
              and market fundamentals to help you become a successful trader.
            </p>
          </div>
          <Image
            alt="image here"
            src="/mulberies.jpg"
            height={1000}
            width={1000}
          />
        </div>
      </div>

      {/* Page 4  */}
      <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen ">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8  gap-12 space-x-2">
            <Image
              alt="image here"
              src="/mulberies.jpg"
              height={1000}
              width={1000}
            />
            <div className="w-full">
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
            <h2 className="text-white text-4xl md:text-6xl pt-4">
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
      <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] text-center">
            <h2 className="text-white text-3xl md:text-5xl pt-4">
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
      <div className="flex-col bg-[#1F2125] h-auto w-screen pb-8 flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] text-center">
            <h2 className="text-white text-3xl md:text-5xl pt-4">
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
      <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen flex-wrap">
        <div className=" container mx-auto w-full md:w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-full  ">
            <h2 className="text-white text-xl md:text-5xl pt-4">
              Here's what our students have to say..
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-full md:w-[80%] pt-8 mx-auto justify-center items-center">
            {' '}
            <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
              <Image
                className="w-24 h-24  rounded-full mx-auto"
                src="/about.jpg"
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    This section is under development, and will be available
                    soon! Thanks for understanding...
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">Jhon Doe</div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Falcon Fx Student -
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>

      {/* Page 10  */}
      <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen flex-wrap">
        <div className=" container mx-auto w-full md:w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-full md:w-[40%] ">
            <h2 className="text-white text-3xl md:text-5xl pt-4 p-4">
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
    </>
  );
}
