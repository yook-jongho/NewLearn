export const hoursSince = (isoDate: string): number => {
  // 지정된 시간
  const startDate = new Date(isoDate);

  // 현재 시간
  const now = new Date();

  // 두 시간의 차이 (밀리초)
  const diffMilliseconds = now.getTime() - startDate.getTime();

  // 시간으로 변환
  const diffHours = diffMilliseconds / (1000 * 60 * 60);

  return Math.floor(diffHours); // 소수점 버림
};
