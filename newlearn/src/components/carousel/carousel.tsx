import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainNews from './mainNews';

type News = {
  thumbnail: string;
  title: string;
  time: string;
  source: string;
};

interface CarouselProps {
  items: News[]; // 이미지 URL 또는 콘텐츠
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
              time={item.time}
              source={item.source}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
