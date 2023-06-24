import React, { useState } from 'react';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';

const Accordion = (props) => {
  const [item, setItem] = useState(props.datas);
  const handleToggle = () => {
    let activeNow = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: activeNow });
  };
  return (
    <div
      className={`flex flex-col mx-auto mb-5 w-[280px] group ${
        item.active === 1 ? 'is-active' : ''
      }`}
    >
      <div className="flex items-center">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 w-full p-4
        group-[.is-active]:font-bold duration-500 cursor-pointer rounded-md bg-gray-900"
        >
          <span className="flex justify-center items-center text-md font-bold rounded-full bg-slate-50 text-slate-700 w-8 h-8">
            1
          </span>
          <h4 className="text-white text-xl">{item.title} </h4>
          {item.active === 1 ? (
            ''
          ) : (
            <BiLockAlt width={100} height={100} className="text-white" />
          )}
        </button>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[200px] duration-500 border-l-4 border-orange-400">
        <div className="flex flex-col ">
          <div className="list">
            <div className="flex justify-between items-center p-[10px] pb-0">
              <div className="flex justify-center items-center gap-4">
                {' '}
                <FaPlay className="text-orange-400" width={100} height={100} />
                <h5 className="text-orange-400">INTRO VIDEO</h5>
              </div>
              <p className="text-white">48M</p>
            </div>
            <div className="flex justify-between items-center p-[10px] pt-0 pb-0 ">
              <div className="flex justify-center items-center gap-4">
                <FaCheckCircle
                  className="text-orange-400"
                  width={100}
                  height={100}
                />
                <p className="text-slate-400">Take a look at good uses</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-[10px] pt-0 pb-0">
              <div className="flex justify-center items-center gap-4">
                <FiCircle className="text-white" width={150} height={150} />
                <p className="text-white">Organise your Folder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
