/**
 * 지정된 소스를 number 로 문제없이 변경이 가능한지 여부.
 */
export const isNumber = (target: unknown): boolean => {
  if (target === null) return false;
  if (typeof target === 'boolean') return false;
  if (!/\d/.test(target as string)) return false;
  if (isNaN(target as number)) return false;
  return true;
};
