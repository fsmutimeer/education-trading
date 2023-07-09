'use client';
import React, { useState } from 'react';
interface VideoSection {
  title: string;
  videos: string[];
}

interface VideoPlayerProps {
  videos: VideoSection[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleVideoClick = (video: string) => {
    setCurrentVideo(video);
    setProgress(0);
  };

  const handleVideoEnd = () => {
    setProgress(100);
  };

  return (
    <div className="flex">
      <div className="w-2/3 p-4">
        {currentVideo ? (
          <video
            src={currentVideo}
            controls
            autoPlay
            onEnded={handleVideoEnd}
            className="w-full h-auto"
          />
        ) : (
          <p>Please select a video to play.</p>
        )}
      </div>
      <div className="w-1/3 p-4">
        <h2 className="text-lg font-bold mb-4">Videos</h2>
        {videos.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-md font-bold mb-2">{section.title}</h3>
            <ul>
              {section.videos.map((video, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => handleVideoClick(video)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {video}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-md font-bold mb-2">Progress</h3>
          <p>{progress}% completed</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
