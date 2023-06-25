import React from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';

const join = () => {
  return (
    <div>
      <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center  ">
            <h2 className="text-white text-5xl pt-4">Plans</h2>
            <div className="flex justify-center items-center]">
              <div className="bg-slate-500 h-[1px] w-[15em] my-4 "></div>
            </div>
            <p className="text-slate-300">
              You decide your{' '}
              <span className="text-orange-400 mr-2">Journey</span> Ahead.
            </p>
          </div>
          {/* Cards */}
          <div className=" flex gap-10 flex-wrap pt-8 mx-auto justify-center items-center">
            {/* Card one */}
            <div className="flex-col w-[30%] border-r-1 p-6 border-r-[1px] border-r-gray-500">
              <div className="flex-col justify-center items-center text-center">
                <h4 className="text-white text-3xl p-2">Quarterly</h4>
                <h4 className="text-white text-3xl p-2">£500</h4>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">TTR Network Access</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  The Archive - Forex Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  The Archive - Index Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Strategy Specialization Guide
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <FaCheck className="text-white items-center" />
                <p className="text-gray-500 text-sm ">Mid-Week Market Review</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Market Testing + Data Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Weekly Mastery Network Meet-Up
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaPlus className="text-orange-400 font-light" />
                <p className="text-gray-500 text-sm ">Metamorphosis Access</p>
              </div>
              <div className="flex justify-center">
                <button className="text-xl uppercase text-orange-400  p-4">
                  Join Now
                </button>
              </div>
            </div>
            {/* Card two */}
            <div className="flex-col w-[30%] border-r-1 p-6 border-r-[1px] border-r-gray-500">
              <div className="flex-col justify-center items-center text-center">
                <h5 className="text-orange-400">MOST POPULAR</h5>
                <h4 className="text-white text-3xl p-2">Monthly</h4>
                <h4 className="text-white text-3xl p-2">£200</h4>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">TTR Network Access</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  The Archive - Forex Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  The Archive - Index Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Strategy Specialization Guide
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <FaCheck className="text-white items-center" />
                <p className="text-gray-500 text-sm ">Mid-Week Market Review</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Market Testing + Data Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Weekly Mastery Network Meet-Up
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaPlus className="text-orange-400 font-light" />
                <p className="text-gray-500 text-sm ">Metamorphosis Access</p>
              </div>
              <div className="flex ml-5">
                <p className="text-orange-400 text-[8px]">
                  *Applicable to first 10 members
                </p>
              </div>
              <div className="flex justify-center">
                <button className="text-xl uppercase text-orange-400  p-4">
                  Join Now
                </button>
              </div>
            </div>
            {/* Card three */}
            <div className="flex-col w-[30%] border-r-1 p-6 ">
              <div className="flex-col justify-center items-center text-center">
                <h5 className="text-orange-400">QUARTERLY BASIS</h5>
                <h4 className="text-white text-3xl p-2">Bootcamp</h4>
                <h4 className="text-white text-3xl p-2">£1750</h4>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-orange-400" />
                <p className="text-gray-500 text-sm ">
                  3 Week Live Calls, A-Z Topics Covered
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-orange-400" />
                <p className="text-gray-500 text-sm ">
                  1 - 1 Follow up with Mentors
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-orange-400" />
                <p className="text-gray-500 text-sm ">
                  1 year TTR Network Access
                </p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">
                  Strategy Specialization Guide
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <FaCheck className="text-white items-center" />
                <p className="text-gray-500 text-sm ">Mid-Week Market Review</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
                <FaCheck className="text-white" />
                <p className="text-gray-500 text-sm ">Mid-Week Market Review</p>
              </div>
              <div className="flex gap-3 pt-4 items-center">
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
              <div className="flex justify-center">
                <button className="text-xl uppercase text-orange-400  p-4">
                  SECURE SPOT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page 9  */}
      <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap">
        <div className=" container mx-auto w-[80%]  flex-col  ">
          {/* Title */}
          <div className="pt-[4rem] mx-auto text-center w-[40%] ">
            <h2 className="text-white text-4xl pt-4 p-4">
              Here's what our{' '}
              <span className="text-orange-400 mr-2">Network</span>have to say.
            </h2>
          </div>
          {/* Cards */}
          <div className=" flex gap-16 flex-wrap w-[80%] pt-8 mx-auto justify-between items-center pb-8">
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
    </div>
  );
};

export default join;
