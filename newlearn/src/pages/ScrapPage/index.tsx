import BasicLayout from '../../layout/basicLayout';
import Header from './Header';
import ScrapNews from './ScrapNews';
import data from '../../mockup/latestNewsList.json';

const ScrapPage = () => {
  return (
    <BasicLayout headerComponent={<Header />}>
      <ScrapNews newsList={data.data.latestNews} />
    </BasicLayout>
  );
};

export default ScrapPage;
