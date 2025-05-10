import Cardnews from '../../components/cardnews';
import { NewsData } from '../../types/news';

const ScrapNews: React.FC<NewsData> = ({ newsList }) => {
  return (
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
  );
};

export default ScrapNews;
