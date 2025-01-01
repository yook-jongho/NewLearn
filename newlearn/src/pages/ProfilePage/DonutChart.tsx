import React from 'react';
import { CATEGORY_NAMES } from '../../constants/category';

type ChartData = {
  categoryId: number;
  percentage: number;
};

type ChartProps = {
  data: ChartData[];
  colors?: string[];
  size?: number; // 차트 크기 (DonutChart 전용)
};

const DEFAULT_COLORS = ['#f9c74f', '#90be6d', '#f94144', '#577590'];

const DonutChart: React.FC<ChartProps> = ({
  data,
  size = 100,
  colors = DEFAULT_COLORS,
}) => {
  let cumulativePercentage = 0;

  const getCoordinatesForPercentage = (percentage: number) => {
    const x = Math.cos(2 * Math.PI * percentage);
    const y = Math.sin(2 * Math.PI * percentage);
    return [x, y];
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 2 2"
      style={{ transform: 'rotate(-90deg)' }}
    >
      {data.map((item, index) => {
        const [startX, startY] =
          getCoordinatesForPercentage(cumulativePercentage);
        cumulativePercentage += item.percentage;
        const [endX, endY] = getCoordinatesForPercentage(cumulativePercentage);

        const largeArcFlag = item.percentage > 0.5 ? 1 : 0;

        const pathData = `
          M ${startX} ${startY}
          A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
          L 0 0
        `;

        return (
          <path
            key={item.categoryId}
            d={pathData}
            fill={colors[index % colors.length]}
          />
        );
      })}
      {/* 도넛 구멍 */}
      <circle cx="0" cy="0" r={1 - 20 / size} fill="white" />
    </svg>
  );
};

const Ranking: React.FC<ChartProps> = ({ data, colors = DEFAULT_COLORS }) => {
  return (
    <div>
      {data.map((category, index) => (
        <div key={category.categoryId}>
          <span
            className="inline-block w-10 mr-2 mb-4 text-center rounded-md"
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          >
            {index + 1}
          </span>
          <span>
            {CATEGORY_NAMES[category.categoryId]}: {category.percentage * 100}%
          </span>
        </div>
      ))}
    </div>
  );
};

const Chart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  return (
    <div className="w-full flex flex-row items-center justify-around">
      <DonutChart data={data} size={200} />
      <Ranking data={data} />
    </div>
  );
};

export default Chart;
