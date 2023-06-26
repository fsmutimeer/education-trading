import React from 'react';
import {
  FaBrain,
  FaDollarSign,
  FaHandPointDown,
  FaLaptop,
  FaObjectGroup,
  FaPeopleArrows,
} from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const faqs = () => {
  return (
    <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap">
      <div className=" container mx-auto w-[80%]  flex-col  ">
        <div className="flex flex-wrap pt-[6rem] mx-auto justify-start items-start  p-[5rem] pb-8">
          <h2 className="text-white text-5xl pt-4 p-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-md p-2">
            Quick answers to questions you may have. Can't find what you're
            looking for? DM us on instagram @thetradingroom8
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10 gap-x-16 justify-start items-start  p-[5rem] pt-1">
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaBrain className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                Do I need Prior Experience in Trading before joining?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaObjectGroup className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                How do I know if I was selected to join?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaPeopleArrows className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                What Does My TTR Membership Include?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaLaptop className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                What Asset classes are Traded in TTR?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaHandPointDown className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                What does the TTR Program contain?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
            <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg w-[400px]">
              <FaBrain className="text-white w-[50px] h-[50px]" />
              <p className="text-white text-sm ">
                When do the Bootcamps occur & what do they include?
              </p>
              <FiPlus className="text-white w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faqs;
