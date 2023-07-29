import React from 'react';

interface ArchiveCardProps {
  photo: string;
  name: string;
  title: string;
  progressBar: string;
  status: string;
  completionPercentage: number;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  photo,
  name,
  title,
  progressBar,
  status,
  completionPercentage,
}) => {
  return (
    <div className="relative bg-green  h-[400px]  w-[250px] m-2 rounded-[16px] shadow-lg">
      <div className=" overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="object-cover  h-[400px] w-[250px] brightness-50  rounded-[16px] inset-1"
        />
      </div>
      <div className="absolute inset-0 flex flex-wrap overflow-hidden flex-col justify-end p-4">
        <h3 className="text-2xl text-orange-400">{name}</h3>
        <h3 className="text-2xl text-white">{title}</h3>
        <div className="h-[15px] w-[40%] bg-gray-400 rounded-md mt-2">
          <div
            className={`h-[15px] rounded-md ${progressBar}`}
            style={{ width: `${completionPercentage > 100 ? 100 : completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-white">
          {status}{' '}
          <span className="text-orange-400">
            {completionPercentage > 100 ? 100 : completionPercentage}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default ArchiveCard;
