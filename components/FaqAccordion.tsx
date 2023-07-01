'use client';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const FaqAccordion = (props: any) => {
  const [item, setItem] = useState(props.items);
  const handleToggle = () => {
    let activeNow = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: activeNow });
  };
  return (
    <div
      className={`flex flex-col mx-auto mb-5 w-[350px] md:w-[400px] group ${
        item.active === 1 ? 'is-active' : ''
      }`}
    >
      <div>
        <button
          onClick={handleToggle}
          className="flex justify-between items-center p-[10px] pt-0 pb-0 w-[350px] md:w-[400px] "
        >
          <div className="flex justify-between items-center gap-2 bg-[#2C2F34] p-2 rounded-lg ">
            {item.icon}
            <p className="text-white text-lg ">{item.question}</p>
            {item.active === 1 ? (
              <FiMinus className="text-white h-[25px] w-[30px]" />
            ) : (
              <FiPlus className="text-white h-[25px] w-[30px]" />
            )}
          </div>
        </button>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[768px] duration-500 ">
        <div className="flex flex-col ">
          <div className="list">
            <div className="flex justify-between items-center p-[10px] pb-0">
              <div className="flex justify-center items-center gap-4">
                <p className="text-slate-300 p-2">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
