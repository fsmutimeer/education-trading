'use client';
import React, { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { BiLockAlt } from 'react-icons/bi';

interface Video {
  title: string;
  duration: string;
  videoFile: string;
  isActive: boolean;
}

interface AccordionItem {
  title: string;
  active: number;
  videos: Video[];
}

interface AccordionProps {
  datas: AccordionItem;
  handleVideoClick: (video: Video) => void;
}

const Accordion: React.FC<AccordionProps> = ({ datas, handleVideoClick }) => {
  const [item, setItem] = useState(datas);

  const handleToggle = () => {
    const activeNow = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: activeNow });
  };

  const handleVideoItemClick = (video: Video) => {
    handleVideoClick(video);
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
          className={`flex items-center gap-2 w-full p-4 ${
            item.active === 1 ? 'font-bold' : ''
          } duration-500 cursor-pointer rounded-md bg-[#2C2F34]`}
        >
          <span className="flex justify-center items-center text-md font-bold rounded-full bg-slate-50 text-slate-700 w-8 h-8">
            1
          </span>
          <h4 className="text-white text-xl">{item.title}</h4>
          {item.active === 1 ? (
            ''
          ) : (
            <BiLockAlt width={100} height={100} className="text-white" />
          )}
        </button>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[200px] duration-500 border-l-4 border-orange-400">
        <div className="flex flex-col">
          <div className="list">
            {item.videos.map((video, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-[10px] ${
                  index === 0 ? 'pb-0' : 'pt-0 pb-0'
                }`}
                onClick={() => handleVideoItemClick(video)}
              >
                <div className="flex justify-center items-center gap-4">
                  {video.isActive ? (
                    <FaPause className="text-white" width={150} height={150} />
                  ) : (
                    <FaPlay
                      className="text-orange-400"
                      width={100}
                      height={100}
                    />
                  )}
                  <h5
                    className={index === 0 ? 'text-orange-400' : 'text-white'}
                  >
                    {video.title}
                  </h5>
                </div>
                {index === 0 && <p className="text-white">{video.duration}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
