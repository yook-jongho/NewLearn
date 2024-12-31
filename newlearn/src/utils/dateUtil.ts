export const getTodayDate = (): {
  month: string;
  day: number;
  weekday: string;
} => {
  const today = new Date();

  // 월 이름 배열 (한국어)
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  // 요일 이름 배열 (한국어)
  const weekdays = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  return {
    month: months[today.getMonth()], // 월 이름
    day: today.getDate(), // 날짜
    weekday: weekdays[today.getDay()], // 요일 이름
  };
};
