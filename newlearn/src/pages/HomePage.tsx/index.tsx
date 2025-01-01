import Cardnews from '../../components/cardnews';
import Carousel from '../../components/carousel/carousel';
import BasicLayout from '../../layout/basicLayout';
import Header from './Header';

const HomePage = () => {
  const mockup = [
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      source: '매일경제',
    },
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      source: '매일경제',
    },
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      source: '매일경제',
    },
  ];
  return (
    <BasicLayout headerComponent={<Header />}>
      <Carousel items={mockup} />
      <Cardnews
        thumbnail={''}
        title={'속보) 어쩌구 저쩌구 블라블라'}
        time={'2시간 전'}
        source={'매일경제'}
      />
    </BasicLayout>
  );
};

export default HomePage;
