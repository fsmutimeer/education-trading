import { VideoPlayer } from '@/components/dashboard';
import React from 'react';

interface VideoSection {
  title: string;
  videos: string[];
}
const page = () => {
  const videos: VideoSection[] = [
    {
      title: 'Introduction',
      videos: [
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
      ],
    },
    {
      title: 'Chapter 1',
      videos: [
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
        'https://www.youtube.com/watch?v=WAX9hYD3pig&ab_channel=JuanRam%C3%B3nGim%C3%A9nez',
      ],
    },

  ];

  return (
    <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen ">
      <div className=" container  mx-auto w-[80%] flex gap-8  pt-[10rem]">
        <h1 className="text-white">Hello im dashboard</h1>
        <div>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Video Player</h1>
            <VideoPlayer videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
