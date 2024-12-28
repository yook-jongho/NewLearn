import React from 'react';
import CategoryItem from './categoryItem'; // categoryItem 컴포넌트
import { CATEGORY_NAMES } from '../../constants/category.ts'; // 카테고리 상수 가져오기

type Layout = {
  layout: string;
};

const CategoryLayout: React.FC<Layout> = ({ layout }) => {
  return (
    <div
      className={`gap-3 
        ${layout === 'profile' ? 'flex flex-wrap' : 'flex overflow-auto hide-scrollbar'}`}
    >
      {Object.entries(CATEGORY_NAMES).map(([id, name]) => (
        <CategoryItem key={id} id={Number(id)} name={name} />
      ))}
    </div>
  );
};

export default CategoryLayout;
