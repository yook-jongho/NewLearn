import Cardnews from '../../components/cardnews';
import CategoryLayout from '../../components/categories/categoryLayout';
import Category from './Category';
import Chart from './DonutChart';
import Header from './Header';

const ProfilPage = () => {
  const chartData = [
    { categoryId: 1, percentage: 0.6 },
    { categoryId: 2, percentage: 0.25 },
    { categoryId: 3, percentage: 0.15 },
  ];

  return (
    <div>
      <Header />
      <Chart data={chartData} />
      <Category />
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
