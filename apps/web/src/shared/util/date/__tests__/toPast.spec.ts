import { toPast } from '../toPast';

describe('toPast', () => {
  const now = new Date('2019-03-12 08:10:20').getTime();

  test('기본 옵션 테스트', () => {
    expect(toPast(now, new Date('2019-03-12 08:09:21').getTime())).toBe('방금 전');
    expect(toPast(now, new Date('2019-03-12 08:00:20').getTime())).toBe('10분 전');
    expect(toPast(now, new Date('2019-03-12 07:10:20').getTime())).toBe('1시간 전');
    expect(toPast(now, new Date('2019-03-11 08:10:21').getTime())).toBe('23시간 전');
    expect(toPast(now, new Date('2019-03-10 08:10:20').getTime())).toBe('2일 전');
    expect(
      toPast(now, new Date('2019-02-10 08:10:19').getTime(), { format: 'YYYY년 MM월 DD일' })
    ).toBe('2019년 02월 10일');
  });

  test('옵션 지정시 값 테스트', () => {
    const now = new Date('2019-03-12 08:10:20').getTime();
    const options = {
      justLabel: '방금',
      minuteLabel: '분',
      hourLabel: '시간',
      dayLabel: '일',
      alternative: '알 수 없음',
    };
    expect(toPast(now, new Date('2019-03-12 08:09:21').getTime(), options)).toBe('방금');
    expect(toPast(now, new Date('2019-03-12 08:00:20').getTime(), options)).toBe('10분');
    expect(toPast(now, new Date('2019-03-12 07:10:20').getTime(), options)).toBe('1시간');
    expect(toPast(now, new Date('2019-03-11 08:10:21').getTime(), options)).toBe('23시간');
    expect(toPast(now, new Date('2019-03-10 08:10:20').getTime(), options)).toBe('2일');
    expect(toPast(now, null, options)).toBe('알 수 없음');
  });

  test('옵션 justMax - 방금 체크시간 테스트', () => {
    const options = {
      justMax: 60 * 60,
      justLabel: '방금',
    };
    const now = new Date('2019-03-12 08:10:20').getTime();
    expect(toPast(now, new Date('2019-03-12 08:09:21').getTime(), options)).toBe('방금');
    expect(toPast(now, new Date('2019-03-12 08:00:20').getTime(), options)).toBe('방금');
    expect(toPast(now, new Date('2019-03-12 07:10:21').getTime(), options)).toBe('방금');
    expect(toPast(now, new Date('2019-03-12 07:10:20').getTime(), options)).toBe('1시간 전');
  });

  test('옵션 minuteMax - n분 체크시간 테스트', () => {
    const options = {
      justMax: 0,
      minuteMax: 60 * 60,
      minuteLabel: '분 전',
    };
    const now = new Date('2019-03-12 08:10:20').getTime();
    expect(toPast(now, new Date('2019-03-12 08:09:21').getTime(), options)).toBe('0분 전');
    expect(toPast(now, new Date('2019-03-12 08:09:19').getTime(), options)).toBe('1분 전');
    expect(toPast(now, new Date('2019-03-12 08:00:20').getTime(), options)).toBe('10분 전');
    expect(toPast(now, new Date('2019-03-12 07:50:20').getTime(), options)).toBe('20분 전');
    expect(toPast(now, new Date('2019-03-12 07:40:20').getTime(), options)).toBe('30분 전');
    expect(toPast(now, new Date('2019-03-12 07:30:20').getTime(), options)).toBe('40분 전');
    expect(toPast(now, new Date('2019-03-12 07:20:20').getTime(), options)).toBe('50분 전');
    expect(toPast(now, new Date('2019-03-12 07:10:21').getTime(), options)).toBe('59분 전');
    expect(toPast(now, new Date('2019-03-12 07:10:20').getTime(), options)).toBe('1시간 전');
  });

  test('옵션 hourMax - n시간 체크시간 테스트', () => {
    const options = {
      justMax: 0,
      minuteMax: 60 * 60,
      minuteLabel: '분 전',
      hourMax: 60 * 60 * 48,
      hourLabel: '시간 전',
    };
    const now = new Date('2019-03-12 08:10:20').getTime();
    expect(toPast(now, new Date('2019-03-12 07:20:20').getTime(), options)).toBe('50분 전');
    expect(toPast(now, new Date('2019-03-12 07:10:21').getTime(), options)).toBe('59분 전');
    expect(toPast(now, new Date('2019-03-12 07:10:20').getTime(), options)).toBe('1시간 전');
    expect(toPast(now, new Date('2019-03-11 07:10:21').getTime(), options)).toBe('24시간 전');
    expect(toPast(now, new Date('2019-03-11 07:10:20').getTime(), options)).toBe('25시간 전');
    expect(toPast(now, new Date('2019-03-10 08:10:21').getTime(), options)).toBe('47시간 전');
    expect(toPast(now, new Date('2019-03-10 08:10:20').getTime(), options)).toBe('2일 전');
  });

  test('옵션 dayMax - n일 체크시간 테스트', () => {
    const options = {
      justMax: 0,
      minuteMax: 60 * 60,
      minuteLabel: '분 전',
      hourMax: 60 * 60 * 24,
      hourLabel: '시간 전',
      dayMax: 60 * 60 * 24 * 3,
      dayLabel: '일 전',
      format: 'YYYY년 MM월 DD일',
    };
    const now = new Date('2019-03-12 08:10:20').getTime();
    expect(toPast(now, new Date('2019-03-11 08:10:20').getTime(), options)).toBe('1일 전');
    expect(toPast(now, new Date('2019-03-10 08:10:20').getTime(), options)).toBe('2일 전');
    expect(toPast(now, new Date('2019-03-09 08:10:20').getTime(), options)).toBe('3일 전');
    expect(toPast(now, new Date('2019-03-09 08:10:19').getTime(), options)).toBe(
      '2019년 03월 09일'
    );
  });
});
