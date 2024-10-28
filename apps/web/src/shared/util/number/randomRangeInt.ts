/**
 * 랜덤으로 숫자(int) 뽑기
 * @example
 * console.log(randomRangeInt(0, 10)); // 0 ~ 10
 */
export function randomRangeInt(min: number, max: number) {
  if (max < min) return 0;
  if (max === min) return max;
  const calcMin = Math.ceil(min);
  const calcMax = Math.floor(max);
  return Math.floor(Math.random() * (calcMax - calcMin + 1)) + calcMin;
}
