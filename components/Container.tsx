import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col bg-[#1F2125] h-auto pb-8 w-screen transition-all ease-in duration-300">
      <div className=" container  mx-auto w-[80%]  pt-[10rem]">{children}</div>
    </div>
  );
};

export default Container;
