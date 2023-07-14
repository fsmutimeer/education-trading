'use client';
import { Container } from '@/components';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdOutlineDownloading } from 'react-icons/md';

interface VideoProps {
  videoFile: string;
  handleVideoPlay: () => void;
  handleVideoPause: () => void;
}

const Video: React.FC<VideoProps> = ({
  videoFile,
  handleVideoPlay,
  handleVideoPause,
}) => (
  <video
    id="videoPlayer"
    className="flex h-[450px] w-full bg-slate-300 mt-8 object-fill"
    controls
    muted
    autoPlay
    onPlay={handleVideoPlay}
    onPause={handleVideoPause}
    src={videoFile}
  />
);

interface OverviewProps {
  desc1: string;
  desc2: string;
}

const Overview: React.FC<OverviewProps> = ({ desc1, desc2 }) => (
  <div className="flex flex-col mt-4 gap-4">
    <div className="flex gap-3">
      <div className="mb-2">
        <h4 className="inline-block text-white text-2xl">Overview</h4>
        <hr className="border-b-1 mt-2 border-gray-500" />
      </div>
      <h4 className="inline-block text-slate-600 text-2xl">Notes</h4>
    </div>

    <div className="flex flex-wrap w-[77%] gap-4">
      <p className="text-white">{desc1}</p>
      <p className="text-white">{desc2}</p>
    </div>
  </div>
);

const Resources: React.FC = () => (
  <div className="flex flex-wrap justify-between w-[60%] mt-6 mb-6">
    <div className="flex flex-col gap-2">
      <h4 className="text-white text-xl">Resources</h4>
      <div className="flex bg-[#2C2F34] h-[3rem] w-[10rem] rounded-md"></div>
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-white text-xl">Downloads</h4>
      <div className="flex bg-[#2C2F34] h-[3rem] w-[100%] rounded-md">
        <div className="flex justify-center items-center p-4">
          <h4 className="text-slate-300 pt-5 pb-5 p-4">Download File</h4>
          <MdOutlineDownloading className="h-6 w-6 text-black bg-orange-400 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export interface AccordionData {
  title: string;
  videos: VideoData[];
  active: number;
}

interface VideoData {
  title: string;
  videoFile: string;
  duration: string;
  isActive: boolean;
}

interface AccordionProps {
  accordionData: AccordionData[];
  toggleAccordion: (index: number) => void;
  handleVideoClick: (video: VideoData) => void;
  selectedVideo: VideoData;
}

const Accordion: React.FC<AccordionProps> = ({
  accordionData,
  toggleAccordion,
  handleVideoClick,
  selectedVideo,
}) => (
  <div className="flex-col list-none p-2 bg-transparent text-white">
    <div className="w-full max-w-md mx-auto">
      {accordionData.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden mb-4 shadow-md">
          <button
            className="flex items-center gap-2 w-full p-4 cursor-pointer rounded-md bg-[#2C2F34] "
            onClick={() => toggleAccordion(index)}
          >
            <span className="w-8 h-8 text-[#2C2F34] bg-gray-200 rounded-full flex justify-center items-center mr-2">
              {index + 1}
            </span>
            <div className="font-medium text-lg">{item.title}</div>
          </button>
          {item.active === 1 && (
            <div className="bg-gray-900 p-4 transition-all ease-in-out duration-500">
              <ul>
                {item.videos.map((video, i) => (
                  <li
                    key={i}
                    onClick={() => handleVideoClick(video)}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    <span className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center mr-2">
                      {video.isActive ? <FaPause /> : <FaPlay />}
                    </span>
                    <span>{video.title}</span>
                    {video.isActive ? '' : <BiLockAlt className="ml-2" />}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

interface PlaylistComponentProps {
  img: string;
  imgDesc: string;
  weekNumber: string;
  weekDesc: string;
  desc1: string;
  desc2: string;
  downloadFileName: string;
  initialPlaylistData: AccordionData[]; // Added prop
}

const PlaylistComponent: React.FC<PlaylistComponentProps> = ({
  img,
  imgDesc,
  weekNumber,
  weekDesc,
  desc1,
  desc2,
  downloadFileName,
  initialPlaylistData, // Added prop
}) => {
  const [accordionData, setAccordionData] = useState(initialPlaylistData);
  const [selectedVideo, setSelectedVideo] = useState(
    initialPlaylistData[0].videos[0]
  );

  const toggleAccordion = (index: number) => {
    setAccordionData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, active: item.active === 0 ? 1 : 0 } : item
      )
    );
  };

  const handleVideoClick = (video: VideoData) => {
    const updatedData = accordionData.map((item) => ({
      ...item,
      videos: item.videos.map((v) => ({
        ...v,
        isActive: v === video ? !v.isActive : false,
      })),
    }));

    setAccordionData(updatedData);
    setSelectedVideo(video);
    const videoPlayer = document.getElementById(
      'videoPlayer'
    ) as HTMLVideoElement;
    if (videoPlayer.paused) {
      video.isActive = true;
      videoPlayer.play();
    } else {
      video.isActive = true;
      videoPlayer.pause();
    }
  };

  const handleVideoPlay = () => {
    setAccordionData((prevData) =>
      prevData.map((item) => ({
        ...item,
        videos: item.videos.map((v) => ({
          ...v,
          isActive: v === selectedVideo,
        })),
      }))
    );
  };

  const handleVideoPause = () => {
    const videoPlayer = document.getElementById(
      'videoPlayer'
    ) as HTMLVideoElement;
    if (!videoPlayer.paused) {
      videoPlayer.pause();
    }
    setAccordionData((prevData) =>
      prevData.map((item) => ({
        ...item,
        videos: item.videos.map((v) => ({
          ...v,
          isActive: false,
        })),
      }))
    );
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex col-span-2 flex-wrap">
          <div className="flex justify-between items-center w-[100%] flex-wrap">
            <div className="flex gap-8">
              <div className="">
                <Image src={'/' + img} height={20} width={100} alt="image" />
              </div>
              <div className="flex flex-col flex-wrap justify-around">
                <h5 className="text-orange-400 font-bold">{imgDesc}</h5>
                <h5 className="text-white font-bold">
                  <span className="text-orange-400">{weekNumber}</span> /{' '}
                  {weekDesc}
                </h5>
              </div>
            </div>
            <div className="">
              <button className="p-2 pl-4 pr-4 bg-slate-50 text-slate-600 rounded-[4rem]">
                Homework
              </button>
            </div>
          </div>
          <Video
            videoFile={selectedVideo.videoFile}
            handleVideoPlay={handleVideoPlay}
            handleVideoPause={handleVideoPause}
          />
          <Overview desc1={desc1} desc2={desc2} />
          <Resources />
        </div>
        <Accordion
          accordionData={accordionData}
          toggleAccordion={toggleAccordion}
          handleVideoClick={handleVideoClick}
          selectedVideo={selectedVideo}
        />
      </div>
    </Container>
  );
};

export default PlaylistComponent;
