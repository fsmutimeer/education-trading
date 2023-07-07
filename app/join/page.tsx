"use client"
import { PaymentModal } from "@/components";
import React, { useState } from "react";

import { FaCheck, FaPlus } from 'react-icons/fa';

const join = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <div>
      <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap pt-10 pb-10">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center  ">
            <h2 className="text-white text-2xl md:text-5xl pt-4">Membership Plans</h2>
            <div className="flex justify-center items-center]">
              <div className="bg-slate-500 h-[1px] w-[15em] my-4 "></div>
            </div>
            <p className="text-slate-300">
              You decide your{' '}
              <span className="text-orange-400 mr-2">Journey</span> Ahead.
            </p>
          </div>
          {/* Cards */}
          {/* <div className=" flex gap-10 flex-wrap pt-8 mx-auto justify-center items-center"> */}
          <div className="grid grid-cols-1 md:grid-cols-3 p-1 md:p-12 gap-8">
            {/* Card one */}
            <div
              style={cardStyle}
              className="flex-col border border-orange-400 rounded-md p-0 md:p-4 w-full md:w-[22rem] "
            >
              <div className="flex-col justify-center items-center text-center">
                <h4 className="text-white text-2xl border-b-2 border-gray-400 p-4 w-full">
                  Pro - Monthly
                </h4>
                <h4 className="text-white text-xl md:text-3xl font-bold p-2">£97</h4>
                <p className="text-sm text-gray-100">Billed Monthly </p>
              </div>
              <button onClick={openModal} className=" text-md bg-orange-400  text-white  pt-2 pb-2 p-4 w-[65%] md:w-[80%] m-4  rounded-md">
                Select Plan
              </button>
              <div className="">
                <div className="flex gap-3 pt-4 items-center   border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">TTR Network Access</p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    The Archive - Forex Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    The Archive - Index Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Strategy Specialization Guide
                  </p>
                </div>
                <div className="flex gap-3 pt-4 border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white items-center" />
                  <p className="text-gray-500 text-sm ">
                    Mid-Week Market Review
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Market Testing + Data Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Weekly Mastery Network Meet-Up
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center">
                  <FaPlus className="text-orange-400 font-light" />
                  <p className="text-gray-500 text-sm ">Metamorphosis Access</p>
                </div>
              </div>
            </div>
            {/* Card two */}
            <div
              style={cardStyle}
              className="flex-col border border-orange-400 rounded-md p-4 w-full md:w-[22rem]  "
            >
              <div className="flex-col justify-center items-center text-center">
                <h4 className="text-white text-2xl border-b-2 border-gray-400 p-4 w-full">
                  Pro - Quarterly
                </h4>
                <h4 className="text-white text-xl md:text-3xl font-bold p-2">£247</h4>
                <p className="text-sm text-gray-100">Billed Quarterly </p>
              </div>
              <button onClick={openModal} className=" text-md bg-orange-400  text-white  pt-2 pb-2 p-4 w-[65%] md:w-[80%] m-4  rounded-md">
                Select Plan
              </button>
              <div className="">
                {' '}
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">TTR Network Access</p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    The Archive - Forex Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    The Archive - Index Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Strategy Specialization Guide
                  </p>
                </div>
                <div className="flex gap-3 pt-4 border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white items-center" />
                  <p className="text-gray-500 text-sm ">
                    Mid-Week Market Review
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Market Testing + Data Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Weekly Mastery Network Meet-Up
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center ">
                  <FaPlus className="text-orange-400 font-light" />
                  <p className="text-gray-500 text-sm ">Metamorphosis Access</p>
                </div>
                <div className="flex ml-5">
                  <p className="text-orange-400 text-[8px]">
                    *Applicable to first 10 members
                  </p>
                </div>
              </div>
            </div>
            {/* Card three */}
            <div
              style={cardStyle}
              className="flex-col border border-orange-400 rounded-md p-4 w-full md:w-[22rem] "
            >
              <div className="flex-col justify-center items-center text-center">
                <h4 className="text-white text-2xl border-b-2 border-gray-400 p-4 w-full">
                  Pro - Annually
                </h4>
                <h4 className="text-white text-xl md:text-3xl font-bold p-2">£970</h4>
                <p className="text-sm text-gray-100">Billed Annually </p>
              </div>
              <button onClick={openModal} className=" text-md bg-orange-400  text-white  pt-2 pb-2 p-4 w-[65%] md:w-[80%] m-4  rounded-md">
                Select Plan
              </button>
              <div className="">
                {' '}
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4 ">
                  <FaCheck className="text-orange-400" />
                  <p className="text-gray-500 text-sm ">
                    3 Week Live Calls, A-Z Topics Covered
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-orange-400" />
                  <p className="text-gray-500 text-sm ">
                    1 - 1 Follow up with Mentors
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-orange-400" />
                  <p className="text-gray-500 text-sm ">
                    1 year TTR Network Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Strategy Specialization Guide
                  </p>
                </div>
                <div className="flex gap-3 pt-4 border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white items-center" />
                  <p className="text-gray-500 text-sm ">
                    Mid-Week Market Review
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Mid-Week Market Review
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center border-b-2 border-gray-400 p-4">
                  <FaCheck className="text-white" />
                  <p className="text-gray-500 text-sm ">
                    Market Testing + Data Access
                  </p>
                </div>
                <div className="flex gap-3 pt-4 items-center">
                  <FaPlus className="text-orange-400 font-light" />
                  <p className="text-gray-500 text-sm ">
                    Weekly Mastery Network Meet-Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <PaymentModal onClose={closeModal} />}
      {/* <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">

          <div className="pt-[4rem] mx-auto text-center w-[40%] ">
            <h2 className="text-white text-4xl pt-4 p-4">
              Here's what our{' '}
              <span className="text-orange-400 mr-2">Network</span>have to say.
            </h2>
          </div>
          <div className=" flex flex-wrap gap-y-8 w-[100%] pt-8 mx-auto justify-evenly items-center pb-8">
            {' '}
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
            <div className="h-[10rem] w-[17rem] bg-slate-300 rounded-[2rem]"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default join;
