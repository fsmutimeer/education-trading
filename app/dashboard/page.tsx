'use client';
import React, { useState } from 'react';
import { ArchiveCard, WelcomeCard } from '@/components/dashboard';
import { Container } from '@/components';

interface VideoSection {
  title: string;
  videos: string[];
  completedVideos: number;
}

const page = () => {
  const items = [
  
    {
      id: 1,
      imageSrc: '/1.jpg',
      titleOrange: 'Forex',
      titleWhite: 'Program',
      progressBar: 'bg-blue-500',
      status: 'Completed',
      statusCount: 100,
    },
    {
      id: 2,
      imageSrc: '/2.jpg',
      titleOrange: 'Indices',
      titleWhite: 'Program',
      progressBar: 'bg-yellow-500',
      status: 'In Progress',
      statusCount: 50,
    },
    {
      id: 3,
      imageSrc: '/3.jpg',
      titleOrange: 'Metamorphosis',
      titleWhite: 'Program',
      progressBar: 'bg-green-500',
      status: 'Started',
      statusCount: 40,
    },
    {
      id: 4,
      imageSrc: '/4.jpg',
      titleOrange: 'Mastery',
      titleWhite: '',
      progressBar: 'bg-red-500',
      status: 'Not Started',
      statusCount: 200,
    }
  ];

  return (
    <Container>
      {/* Welcome card */}
      <div className="flex pl-4 pb-4">
        <WelcomeCard />
      </div>
      {/* Heading */}
      <div className="flex pb-4 pl-4 ">
        <h4 className="text-gray-300 text-2xl md:text-3xl">The Archive</h4>
      </div>
      {/* Archive cards */}
      <div className="flex  flex-wrap pl-4 gap-4 justify-between items-center">
        {items.map((card) => (
          <ArchiveCard
            key={card.id}
            imageSrc={card.imageSrc}
            titleOrange={card.titleOrange}
            titleWhite={card.titleWhite}
            progressBar={card.progressBar}
            status={card.status}
            statusCount={card.statusCount}
          />
        ))}
      </div>
    </Container>
  );
};

export default page;
