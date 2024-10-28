import { toFormat } from '../toFormat';

describe('utils/date/toFormat', () => {
  const testDate = new Date('2019-03-21T14:33:57.000+09:00');
  const timezoneOffset = (testDate.getTimezoneOffset() + 540) * 60 * 1000;
  const at1 = testDate.getTime() + timezoneOffset;
  const at2 = Math.floor(at1 / 1000); // unixtime

  it("invalid 한 날짜는 공백('')으로 반환 되어야 합니다.", () => {
    expect(toFormat('invalid')).toBe('');
    // @ts-ignore
    expect(toFormat(null)).toBe('');
    // @ts-ignore
    expect(toFormat(undefined)).toBe('');
  });

  it('변경 가능한 날짜는 기본 포맷으로 출력되어야 합니다.', () => {
    expect(toFormat(at1)).toBe('2019-03-21 14:33:57');
  });

  it('format 옵션에 지정된 형식으로 출력되어야 합니다.', () => {
    expect(toFormat(at1, { format: 'YYYY-MM-DD(d)' })).toBe('2019-03-21(목)');
    expect(toFormat(at1, { format: 'hh:mm:ss YYYY/MM/DD' })).toBe(
      '14:33:57 2019/03/21'
    );
  });

  it('multiple 옵션에 지정된 값만큼 곱해진 값으로 출력되어야 합니다.', () => {
    expect(toFormat(at2, { multiple: 1000 })).toBe('2019-03-21 14:33:57');
  });

  it('labelDays 옵션에 지정된 날짜형식으로 출력되어야 합니다.', () => {
    expect(
      toFormat(at1, {
        labelDays: [
          '일요일!',
          '월요일!',
          '화요일!',
          '수요일!',
          '목요일!',
          '금요일!',
          '토요일!',
        ],
        format: 'YYYY-MM-DD (d)',
      })
    ).toBe('2019-03-21 (목요일!)');
  });

  it('alternative 옵션 지정시 invalid 한 날짜는 지정된 alternative 값으로 반환 되어야 합니다.', () => {
    expect(toFormat(null as any, { alternative: '-' })).toBe('-');
    expect(toFormat('', { alternative: 'Unknown' })).toBe('Unknown');
    expect(toFormat(at1, { alternative: 'Unknown' })).not.toBe('Unknown');
  });
});
