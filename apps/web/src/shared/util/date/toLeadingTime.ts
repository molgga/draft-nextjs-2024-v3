import { isNumber } from '../number';

/**
 * 지정된 시간 숫자 앞에 0을 채워야 하는 경우 0을 채움.
 */
export const toLeadingTime = (time: string | number): string => {
  let refine: string | number;
  if (isNumber(time)) {
    const safeNum = Number(time);
    refine = safeNum >= 0 && safeNum < 10 ? `0${safeNum}` : time.toString();
  } else {
    refine = time;
  }
  return refine as string;
};
