import React from 'react';
import CategoryItem from './categoryItem'; // categoryItem 컴포넌트
import { CATEGORY_NAMES } from '../../constants/category.ts'; // 카테고리 상수 가져오기

const CategoryLayout: React.FC = () => {
  return (
    <div className="w-4/5 flex flex-wrap gap-3 justify-center">
      {Object.entries(CATEGORY_NAMES).map(([id, name]) => (
        <CategoryItem key={id} id={Number(id)} name={name} />
      ))}
    </div>
  );
};

export default CategoryLayout;
