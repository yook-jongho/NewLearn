import CategoryLayout from '../../components/categories/categoryLayout';

const Category = () => {
  return (
    <>
      <span className="font-semibold inline-block">나의 카테고리</span>
      <CategoryLayout layout="profile" />
    </>
  );
};

export default Category;
