import { useParams } from 'react-router';
import Header from './Header';
import NewsInfo from './NewsInfo';
import useApi from '../../hooks/api';
import { ApiResponse, NewsDetail } from '../../types/news';
import { useEffect } from 'react';

const NewsDetailPage = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const { data, loading, error, request } =
    useApi<ApiResponse<{ articles: NewsDetail }>>();

  // 기본값 설정
  const defaultArticle: NewsDetail = {
    newsId: 0,
    title: '',
    source: '',
    publishedDate: '',
    thumbnail: '',
    content: '',
  };

  // 데이터 요청
  useEffect(() => {
    const fetchData = async () => {
      await request(`http://localhost:3000/articles/details/${newsId}`, 'GET');
    };
    fetchData();
  }, [newsId, request]);

  const articles: NewsDetail = data?.data.articles || defaultArticle;

  console.log(articles);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header thumbnail={articles.thumbnail} />
      <NewsInfo
        title={articles.title}
        publishedDate={articles.publishedDate}
        source={articles.source}
        content={articles.content}
        newsId={articles.newsId}
        thumbnail={articles.thumbnail}
      />
    </>
  );
};

export default NewsDetailPage;
