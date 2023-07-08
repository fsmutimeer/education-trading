import React from 'react';

interface ArchiveCardProps {
  imageSrc: string;
  titleOrange: string;
  titleWhite: string;
  progressBar: string;
  status: string;
  statusCount: number;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  imageSrc,
  titleOrange,
  titleWhite,
  progressBar,
  status,
  statusCount,
}) => {
  return (
    <div className="relative bg-green h-[280px]  w-[160px]  rounded-[16px] shadow-lg">
      <div className=" overflow-hidden">
        <img
          src={imageSrc}
          alt={titleOrange}
          className="object-cover h-[280px] w-[160px] rounded-[16px]"
        />
      </div>
      <div className="absolute inset-0 flex flex-wrap overflow-hidden flex-col justify-end p-4">
        <h3 className="text-md md:text-xl text-orange-400">{titleOrange}</h3>
        <h3 className="text-md md:text-xl text-white">{titleWhite}</h3>
        <div className="h-[15px] w-[40%] bg-gray-400 rounded-md mt-2">
          <div
            className={`h-[15px] rounded-md ${progressBar}`}
            style={{ width: `${statusCount > 100 ? 100 : statusCount}%` }}
          ></div>
        </div>
        <p className="text-white">
          {status}{' '}
          <span className="text-orange-400">
            {statusCount > 100 ? 100 : statusCount}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default ArchiveCard;
