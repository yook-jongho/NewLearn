import Cardnews from '../../components/cardnews';
import CategoryLayout from '../../components/categories/categoryLayout';

const ProfilPage = () => {
  return (
    <div>
      <header>
        육종호님은 지금까지 <br />
        <b>총 10개</b>의 기사를 읽었어요!
      </header>
      <section>
        <div> 그래프 </div>
        <div> 순위 </div>
      </section>
      <section>
        <CategoryLayout layout="profile" />
      </section>
      <section>
        <div>
          최근에 읽은 뉴스 <span>* 최신 20개만 저장됩니다.</span>
        </div>
        <Cardnews thumbnail={''} title={''} time={''} agency={''} />
        <Cardnews thumbnail={''} title={''} time={''} agency={''} />
        <Cardnews thumbnail={''} title={''} time={''} agency={''} />
        <Cardnews thumbnail={''} title={''} time={''} agency={''} />
      </section>
    </div>
  );
};

export default ProfilPage;
