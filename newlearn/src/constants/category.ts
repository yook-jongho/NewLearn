export const CATEGORIES = {
  POLITICS: 1, // 정치
  ECONOMY: 2, // 경제
  SOCIETY: 3, // 사회
  CULTURE: 4, // 생활/문화
  WORLD: 5, // 세계
  TECHNOLOGY: 6, // 기술/IT
  ENTERTAINMENT: 7, // 연예
  SPORTS: 8, // 스포츠
} as const;

// 역으로 숫자 값을 통해 카테고리 이름을 얻고 싶을 때
export const CATEGORY_NAMES: { [key: number]: string } = {
  1: '정치',
  2: '경제',
  3: '사회',
  4: '생활/문화',
  5: '세계',
  6: '기술/IT',
  7: '연예',
  8: '스포츠',
};
