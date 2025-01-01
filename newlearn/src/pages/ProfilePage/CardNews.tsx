import Cardnews from '../../components/cardnews';
import { NewsData } from '../../types/news';

const CardNews: React.FC<NewsData> = ({ newsList }) => {
  return (
    <div>
      <span className="inline-block mb-5 text-lg font-semibold">
        최근에 읽은 뉴스{' '}
        <span className="text-sm text-gray-400">* 최신 20개만 저장됩니다.</span>
      </span>
      <div className="flex flex-col gap-3">
        {newsList.map((news) => (
          <Cardnews
            key={news.newsId}
            thumbnail={news.thumbnail}
            title={news.title}
            time={news.publishedDate}
            source={news.source}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNews;
