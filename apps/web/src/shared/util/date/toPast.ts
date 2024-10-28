import { toBeLeft } from './toBeLeft';
import { toFormat } from './toFormat';

/**
 * 지난시간 포맷 옵션
 */
export interface DatePastOption {
  justMax?: number;
  justLabel?: string;
  minuteMax?: number;
  minuteLabel?: string;
  hourMax?: number;
  hourLabel?: string;
  dayMax?: number;
  dayLabel?: string;
  format?: string;
  alternative?: string;
  overThenJust?: boolean;
}

/**
 * pastAt 이 fromAt 으로 부터 지나간 시간을 지정된 옵션에 따라 반환.
 */
export const toPast = (
  fromAt: number | string,
  pastAt: number | string,
  options: DatePastOption = {}
): string => {
  const {
    justMax = 60,
    minuteMax = 3600,
    hourMax = 86400,
    dayMax = 2592000,
    justLabel = '방금 전',
    minuteLabel = '분 전',
    hourLabel = '시간 전',
    dayLabel = '일 전',
    format = 'YYYY-MM-DD hh:mm:ss',
    alternative = 'Unknown',
    overThenJust = true,
  }: DatePastOption = options;
  if (!pastAt || !fromAt) {
    return alternative;
  }
  const atFrom: number =
    fromAt && fromAt.constructor === String
      ? new Date(fromAt).getTime()
      : (fromAt as number);
  const atPast: number =
    pastAt && pastAt.constructor === String
      ? new Date(pastAt).getTime()
      : (pastAt as number);
  if (!overThenJust && atFrom <= atPast) {
    return alternative;
  }
  const pastTime = overThenJust ? Math.min(atFrom, atPast) : atPast;
  const beLeft = toBeLeft(pastTime, atFrom);
  if (beLeft.second < justMax) return justLabel;
  if (beLeft.second < minuteMax) return `${beLeft.minute}${minuteLabel}`;
  if (beLeft.second < hourMax) return `${beLeft.hour}${hourLabel}`;
  if (beLeft.second <= dayMax) return `${beLeft.day}${dayLabel}`;
  return toFormat(pastAt, { format });
};
