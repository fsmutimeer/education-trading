import { Container } from '@/components';
import { ArchiveCard, WelcomeCard } from '@/components/dashboard';
import React from 'react';

const Archive = () => {
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
    },
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
      <div className="flex flex-col pl-4 md:grid md:grid-cols-4 gap-12 justify-center items-center">
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

export default Archive;
