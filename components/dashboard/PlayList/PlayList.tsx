'use client';
import React from 'react';
import Accordion from './Accordion';
interface Video {
  title: string;
  duration: string;
  videoFile: string;
  isActive: boolean;
}
const PlayList = () => {
  const playlistData = [
    {
      title: 'Introduction',
      active: 0,
      videos: [
        {
          title: 'Intro Video 1',
          duration: '3:30',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 2',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 3',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 4',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 5',
          duration: '4:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 6',
          duration: '6:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
      ],
    },
    {
      title: 'Chapter 1',
      active: 0,
      videos: [
        {
          title: 'Intro Video 1',
          duration: '10:30',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 2',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
      ],
    },
  ];

  const handleVideoClick = (video: Video) => {
    video.isActive = true;
    const videoElement = document.getElementById(
      'videoPlayer'
    ) as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.src = video.videoFile;
      videoElement.play();
    }
  };
  return (
    <div className="overflow-hidden flex justify-center mx-auto w-[30%]">
      <div className="list">
        {playlistData.map((item, key) => (
          <Accordion
            key={key}
            datas={item}
            handleVideoClick={handleVideoClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
