import React from 'react';

const WelcomeCard = () => {
  return (
    <section className="block max-w-2xl md:max-w-3xl p-6 bg-gray-800 rounded-xl ">
      <h3 className="text-gray-100 text-2xl md:text-3xl p-1">
        Welcome to the Archive,
        <span className="text-orange-400">username here</span>{' '}
      </h3>
      <h5 className="mb-2 text-xl md:text-xl tracking-tight text-gray-400 p-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint!
        Iure adipisci nulla sunt! Tenetur earum autem hic voluptatem provident!
      </h5>
    </section>
  );
};

export default WelcomeCard;
