import Cardnews from '../../components/cardnews';
import CategoryLayout from '../../components/categories/categoryLayout';

const HomePage = () => {
  return (
    <>
      <header className="w-full h-fit">
        <div>
          <span>12월 29일</span>
          <button>알람버튼</button>
        </div>
        <CategoryLayout layout="home" />
      </header>
      <main>
        <section>메인기사 3개 케러셀</section>
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
    </>
  );
};

export default HomePage;
