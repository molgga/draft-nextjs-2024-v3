/**
 * 랜덤으로 숫자(float) 뽑기
 */
export function randomRangeFloat(min: number, max: number) {
  if (max < min) return 0;
  if (max === min) return max;
  const calcMin = Math.ceil(min);
  const calcMax = Math.floor(max);
  return Math.random() * (calcMax - calcMin) + calcMin;
}
