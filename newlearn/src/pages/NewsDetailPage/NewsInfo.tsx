import { hoursSince } from '../../utils/timeCalc';
import Bookmark from '../../assets/bookmark-line.svg?react';
import Link from '../../assets/links-line.svg?react';
import { NewsDetail } from '../../types/news';

const NewsInfo: React.FC<NewsDetail> = ({
  title,
  publishedDate,
  source,
  content,
}) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <span className="inline-block text-3xl mb-1">{title}</span>
        <br />
        <span className="text-xs text-gray-600">
          {hoursSince(publishedDate)}시간 전, {source}
        </span>
      </div>
      <div>
        <div className="flex flex-row gap-3 justify-end">
          <button>쉬운 단어로 바꾸기</button>
          <button>ai 요약</button>
          <Bookmark width={20} height={20} />
          <Link width={20} height={20} />
        </div>
      </div>
      <hr />
      <div>{content}</div>
    </div>
  );
};

export default NewsInfo;
