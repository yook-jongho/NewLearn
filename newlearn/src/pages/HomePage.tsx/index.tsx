import Cardnews from '../../components/cardnews';
import Carousel from '../../components/carousel/carousel';
import CategoryLayout from '../../components/categories/categoryLayout';

const HomePage = () => {
  const mockup = [
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      agency: '매일경제',
    },
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      agency: '매일경제',
    },
    {
      thumbnail: 'https://url.kr/qsyxm9',
      title: '너무 귀여워서 충격.. 실화',
      time: '2시간 전',
      agency: '매일경제',
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <header>
        <div>
          <span>12월 29일</span>
          <button>알람버튼</button>
        </div>
        <CategoryLayout layout="home" />
      </header>
      <main className="w-full h-4/5 flex flex-col gap-10">
        <Carousel items={mockup} />
        <section>
          카드뉴스 목록
          <Cardnews
            thumbnail={''}
            title={'속보) 어쩌구 저쩌구 블라블라'}
            time={'2시간 전'}
            agency={'매일경제'}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
