import CategoryLayout from '../../components/categories/categoryLayout';

const Header = () => {
  return (
    <header>
      <div className="">
        <span>12월 29일</span>
        <button>알람버튼</button>
      </div>
      <CategoryLayout layout="home" />
    </header>
  );
};

export default Header;
