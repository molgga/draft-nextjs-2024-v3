/**
 * fromAt, toAt 두 시간의 차이를 각 시간 단위(초, 분, 시간, 일)로 반환한다.
 */
export const toBeLeft = (fromAt: number, toAt: number) => {
  const second = Math.floor((toAt - fromAt) / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  return { second, minute, hour, day };
};
