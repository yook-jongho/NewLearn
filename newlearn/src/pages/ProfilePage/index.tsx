import BasicLayout from '../../layout/basicLayout';
import CardNews from './CardNews';
import Category from './Category';
import Chart from './DonutChart';
import Header from './Header';
import data from '../../mockup/latestNewsList.json';

const ProfilPage = () => {
  const chartData = [
    { categoryId: 1, percentage: 0.6 },
    { categoryId: 2, percentage: 0.25 },
    { categoryId: 3, percentage: 0.15 },
  ];

  return (
    <BasicLayout headerComponent={<Header />}>
      <Chart data={chartData} />
      <Category />
      <CardNews newsList={data.data.latestNews} />
    </BasicLayout>
  );
};

export default ProfilPage;
