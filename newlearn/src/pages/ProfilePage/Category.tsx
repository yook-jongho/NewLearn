import CategoryLayout from '../../components/categories/categoryLayout';

const Category = () => {
  return (
    <div>
      <span className="mb-5 text-lg font-semibold inline-block">
        나의 카테고리
      </span>
      <CategoryLayout layout="profile" />
    </div>
  );
};

export default Category;
