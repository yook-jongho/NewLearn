import React, { useState } from 'react';

type CategoryItemProps = {
  name: string; // 카테고리 이름
  id: number; // 카테고리 ID
};

const CategoryItem: React.FC<CategoryItemProps> = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev); // 선택 상태 토글
  };

  return (
    <div
      onClick={handleClick}
      className={`w-fit h-fit px-4 py-2 rounded-[20px] shadow-sm text-center cursor-pointer transition duration-200 flex-shrink-0
            ${
              isSelected
                ? 'bg-[#83AEF7] text-white font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-black'
            }`}
    >
      {name}
    </div>
  );
};

export default CategoryItem;
