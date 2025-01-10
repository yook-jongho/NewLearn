import { useEffect } from 'react';
import Cardnews from '../../components/cardnews';
import Carousel from '../../components/carousel/carousel';
import useApi from '../../hooks/api';
import BasicLayout from '../../layout/basicLayout';
import { ApiResponse, news } from '../../types/news';
import Header from './Header';

const HomePage = () => {
  const { data, loading, error, request } = useApi<ApiResponse>();

  // 데이터 요청
  useEffect(() => {
    const fetchData = async () => {
      await request('http://localhost:3000/articles', 'GET');
    };
    fetchData();
  }, [request]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // articles 데이터 분리
  const articles: news[] = data?.data.articles || [];
  const carouselItems = articles.slice(0, 3); // 첫 3개 아이템
  const cardNewsItems = articles.slice(3); // 나머지 아이템

  return (
    <BasicLayout headerComponent={<Header />}>
      {/* Carousel에 첫 3개 데이터 전달 */}
      <Carousel items={carouselItems} />

      <div className="flex flex-col gap-2">
        {cardNewsItems.map((item, index) => (
          <Cardnews
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            publishedDate={item.publishedDate}
            source={item.source}
            newsId={item.newsId} // ID 필드가 없는 경우 고유한 값 생성
          />
        ))}
      </div>
    </BasicLayout>
  );
};

export default HomePage;
