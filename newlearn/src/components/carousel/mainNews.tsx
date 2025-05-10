import React from 'react';

interface NewsCardProps {
  thumbnail: string; // 뉴스 썸네일 이미지 URL
  title: string; // 뉴스 제목
  time: string;
  source: string;
}

const MainNews: React.FC<NewsCardProps> = ({
  thumbnail,
  title,
  time,
  source,
}) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className="absolute bottom-0 left-0 w-full rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm mt-1 opacity-75">
          {time}, {source}
        </p>
      </div>
    </div>
  );
};

export default MainNews;
