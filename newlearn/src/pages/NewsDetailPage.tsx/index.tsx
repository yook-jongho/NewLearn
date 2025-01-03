import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import Header from './Header';
import NewsInfo from './NewsInfo';

const NewsDetailPage = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1); // 히스토리 스택에서 한 단계 뒤로 이동
  };

  const mockup = {
    newsId: 101,
    title: 'Latest AI breakthrough',
    source: 'TechTimes',
    publishedDate: '2024-12-31T23:00:00Z',
    thumbnail: 'https://url.kr/qsyxm9',
    content:
      'The full article content goes here. This section contains all the detailed information about the news, including insights, statistics, and expert opinions.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at earum consequuntur officia repellat doloremque numquam similique et adipisci ex, non eaque, itaque inventore! Fugiat adipisci ut dignissimos cupiditate. Laborum!',
  };
  return (
    <>
      <Header thumbnail={mockup.thumbnail} />
      <NewsInfo
        title={mockup.title}
        publishedDate={mockup.publishedDate}
        source={mockup.source}
        content={mockup.content}
      />
    </>
  );
};

export default NewsDetailPage;
