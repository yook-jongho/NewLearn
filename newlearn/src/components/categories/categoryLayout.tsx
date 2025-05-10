import React, { useState } from 'react';
import CategoryItem from './categoryItem'; // categoryItem 컴포넌트
import { CATEGORY_NAMES } from '../../constants/category.ts'; // 카테고리 상수 가져오기

type Layout = {
  layout?: string; // 'profile' 또는 다른 화면 식별용
};

const CategoryLayout: React.FC<Layout> = ({ layout }) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    layout === 'profile' ? [] : [-1], // 기본값: 프로필은 다중 선택, 홈은 단일 선택 (-1은 선택되지 않은 상태)
  );

  const handleCategoryClick = (id: number) => {
    if (layout === 'profile') {
      // 다중 선택 로직
      setSelectedCategories((prev) =>
        prev.includes(id)
          ? prev.filter((categoryId) => categoryId !== id)
          : [...prev, id],
      );
    } else {
      // 단일 선택 로직
      setSelectedCategories([id]);
    }
  };

  return (
    <div
      className={`gap-3 
        ${layout === 'profile' ? 'flex flex-wrap' : 'flex overflow-auto hide-scrollbar'}`}
    >
      {Object.entries(CATEGORY_NAMES).map(([id, name]) => (
        <CategoryItem
          key={id}
          id={Number(id)}
          name={name}
          isSelected={selectedCategories.includes(Number(id))}
          onClick={() => handleCategoryClick(Number(id))}
        />
      ))}
    </div>
  );
};

export default CategoryLayout;
