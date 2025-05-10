import { useNavigate } from 'react-router';
import Arrow from '../assets/arrow-right.svg?react';
import Image from '../assets/image.svg?react';
import { news } from '../types/news';
import { hoursSince } from '../utils/timeCalc';

const Cardnews = ({
  thumbnail,
  title,
  publishedDate,
  source,
  newsId,
}: news) => {
  const navigate = useNavigate();

  // 특정 라우터로 이동하는 함수
  const handleNavigation = (newsId: number) => {
    navigate(`/details/${newsId}`);
  };
  const commonStyles = 'w-32 bg-[#EAF2FF] rounded-lg';
  return (
    <div
      className="h-30 flex flex-row rounded-lg border border-gray-300"
      onClick={() => handleNavigation(newsId)}
    >
      {thumbnail ? (
        <img src={thumbnail} className={commonStyles} />
      ) : (
        <Image className="w-40 h-30 bg-[#EAF2FF] fill-[#B4DBFF] rounded-lg" />
      )}
      <div className="w-full h-32 flex flex-row items-center justify-between bg-[#F8F9FE] rounded-lg">
        <div className="w-4/5 p-2">
          <span className="inline-block text-sm">{title}</span>
          <div>
            <span className="text-xs text-gray-600">
              {hoursSince(publishedDate)}시간 전, {source}
            </span>
          </div>
        </div>
        <Arrow className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Cardnews;
