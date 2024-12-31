import Arrow from '../assets/arrow-right.svg?react';
import Image from '../assets/image.svg?react';

type CardNews = {
  thumbnail: string;
  title: string;
  time: string;
  agency: string;
};
const Cardnews = ({ thumbnail, title, time, agency }: CardNews) => {
  const commonStyles = 'w-40 h-30 bg-[#EAF2FF]';
  return (
    <div className="flex flex-row rounded-lg border border-gray-300">
      {thumbnail ? (
        <img src={thumbnail} className={commonStyles} />
      ) : (
        <Image className="w-40 h-30 bg-[#EAF2FF] fill-[#B4DBFF]" />
      )}
      <div className="w-full flex flex-row items-center justify-between bg-[#F8F9FE]">
        <div className="p-2">
          <span className="inline-block mb-2">{title}</span>
          <div>
            <span>{time}</span>, <span>{agency}</span>
          </div>
        </div>
        <Arrow className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Cardnews;
