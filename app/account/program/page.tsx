'use client';
import React, { useState } from 'react';
import { Accordion } from '@/components';
import Image from 'next/image';
import { MdOutlineDownloading } from 'react-icons/md';

export default function Program() {
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
    <>
      <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen">
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
                <div className="flex bg-[#2C2F34] h-[3rem] w-[10rem] rounded-md"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-xl">Downloads</h4>
                <div className="flex bg-[#2C2F34] h-[3rem] w-[100%] rounded-md">
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
    </>
  );
}
