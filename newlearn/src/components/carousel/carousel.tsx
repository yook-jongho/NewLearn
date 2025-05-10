import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainNews from './mainNews';
import { news } from '../../types/news';

interface CarouselProps {
  items: news[]; // 개별 뉴스 항목 배열
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 기본 화살표 숨김
  };

  return (
    <div className="w-full h-fit">
      <Slider {...settings} className="w-full">
        {items.map((item, index) => (
          <div key={index} className="w-full p-2">
            <MainNews
              thumbnail={item.thumbnail}
              title={item.title}
              time={item.publishedDate}
              source={item.source}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
