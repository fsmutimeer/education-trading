import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#1F2125] min-h-screen pb-8">
      <div className="container mx-auto px-8 py-10">{children}</div>
    </div>
  );
};

export default Container;
