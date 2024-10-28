import { toLeadingTime } from '../toLeadingTime';

describe('utils/date/toLeadingTime', () => {
  it('10 보다 작은 경우 앞에 0 을 채워야 합니다.', () => {
    expect(toLeadingTime(0)).toBe('00');
    expect(toLeadingTime(1)).toBe('01');
    expect(toLeadingTime(2)).toBe('02');
    expect(toLeadingTime(3)).toBe('03');
    expect(toLeadingTime(4)).toBe('04');
    expect(toLeadingTime(5)).toBe('05');
    expect(toLeadingTime(6)).toBe('06');
    expect(toLeadingTime(7)).toBe('07');
    expect(toLeadingTime(8)).toBe('08');
    expect(toLeadingTime(9)).toBe('09');
  });

  it('10 이상인 경우 자릿수 그대로 반환해야 합니다.', () => {
    expect(toLeadingTime(10)).toBe('10');
    expect(toLeadingTime(11)).toBe('11');
    expect(toLeadingTime(20)).toBe('20');
    expect(toLeadingTime(30)).toBe('30');
    expect(toLeadingTime(100)).toBe('100');
  });

  it('문자열(숫자)도 숫자와 동일하게 처리되어야 합니다.', () => {
    expect(toLeadingTime('0')).toBe('00');
    expect(toLeadingTime('9')).toBe('09');
    expect(toLeadingTime('10')).toBe('10');
    expect(toLeadingTime('22')).toBe('22');
  });
});
