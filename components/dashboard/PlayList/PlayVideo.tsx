import Image from 'next/image';
import React from 'react';
import { MdOutlineDownloading } from 'react-icons/md';
interface VideoProps {
  img: string;
  imgDesc: string;
  weekNumber: number;
  weekDesc: string;
  desc1: string;
  desc2: string;
  downloadFileName: string;
}

const PlayVideo: React.FC<VideoProps> = ({
  img,
  imgDesc,
  weekNumber,
  weekDesc,
  desc1,
  desc2,
  downloadFileName,
}) => {
  return (
    <div className="flex w-[70%] flex-wrap">
      <div className="flex justify-between items-center w-[100%] flex-wrap">
        <div className="flex  gap-8">
          <div className="">
            <Image src={img} height={20} width={100} alt="image" />
          </div>
          <div className="flex flex-col flex-wrap justify-around">
            <h5 className="text-orange-400 font-bold">{imgDesc}</h5>
            <h5 className="text-white font-bold">
              {' '}
              <span className="text-orange-400">{weekNumber}</span> / {weekDesc}
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
      <video
        id="videoPlayer"
        className="flex h-[25rem] w-full bg-slate-300 mt-8 object-fill"
        controls
        src="/v.mp4"
      />
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
          <p className="text-white">{desc1}</p>
          <p className="text-white">{desc2}</p>
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
                {downloadFileName}
              </h4>
              <MdOutlineDownloading className="h-6 w-6 text-black bg-orange-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
