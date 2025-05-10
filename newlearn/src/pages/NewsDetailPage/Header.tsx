import { useNavigate } from 'react-router';
import Arrow from '../../assets/arrow-right.svg?react';

type HeaderProps = {
  thumbnail: string;
};

const Header: React.FC<HeaderProps> = ({ thumbnail }) => {
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1); // 히스토리 스택에서 한 단계 뒤로 이동
  };
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div
        className="absolute top-5 left-5 rounded-full bg-white"
        onClick={goBack}
      >
        <Arrow width={30} height={30} className="transform scale-x-[-1]" />
      </div>
    </div>
  );
};

export default Header;
