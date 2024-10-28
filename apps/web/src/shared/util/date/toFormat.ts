import { isNumber } from '../number';
import { toLeadingTime } from './toLeadingTime';

/**
 * 날짜 포맷 옵션
 */
export interface DateFormatOption {
  format?: string;
  multiple?: number;
  alternative?: string;
  labelDays?: string[];
}

/**
 * 지정된 시간을 지정된 옵션의 포맷으로 변경
 */
export const toFormat = (
  at: number | string,
  options: DateFormatOption = {}
): string => {
  const {
    multiple = 1,
    alternative = '',
    format = 'YYYY-MM-DD hh:mm:ss',
    labelDays = ['일', '월', '화', '수', '목', '금', '토'],
  }: DateFormatOption = options;
  let dateStr = alternative;
  if (at) {
    const date = isNumber(at)
      ? new Date((at as number) * multiple)
      : new Date(at);
    if (!date || isNaN(date.valueOf())) {
      return dateStr;
    }
    const dtYear = date.getFullYear();
    const dtMonth = date.getMonth() + 1;
    const dtDate = date.getDate();
    const dtDay = date.getDay();
    const dtHour = date.getHours();
    const dtHourA = dtHour < 13 ? dtHour : dtHour - 12;
    const dtMinute = date.getMinutes();
    const dtSecond = date.getSeconds();
    const dtAA = dtHour < 13 ? '오전' : '오후';

    dateStr = format;
    dateStr = dateStr.replace(/YYYY/, dtYear.toString());
    dateStr = dateStr.replace(/MM/, toLeadingTime(dtMonth));
    dateStr = dateStr.replace(/DD/, toLeadingTime(dtDate));
    if (dateStr.includes('AA')) {
      dateStr = dateStr.replace(/AA/, dtAA);
      dateStr = dateStr.replace(/hh/, toLeadingTime(dtHourA));
    } else {
      dateStr = dateStr.replace(/hh/, toLeadingTime(dtHour));
    }
    if (dateStr.includes('d')) {
      dateStr = dateStr.replace(/d/, labelDays[dtDay]);
    }
    dateStr = dateStr.replace(/mm/, toLeadingTime(dtMinute));
    dateStr = dateStr.replace(/ss/, toLeadingTime(dtSecond));
  }
  return dateStr;
};
