import { toKoreanLabelNumber } from '../toKoreanLabelNumber';

describe('utils/number/toKoreanLabelNumber', () => {
  it('숫자가 한글로 반환되어야 합니다.', () => {
    expect(toKoreanLabelNumber(0)).toBe('');
    expect(toKoreanLabelNumber(123)).toBe('일백이십삼');
    expect(toKoreanLabelNumber(1234)).toBe('일천이백삼십사');
    expect(toKoreanLabelNumber(12345)).toBe('일만이천삼백사십오');
    expect(toKoreanLabelNumber(20000)).toBe('이만');
    expect(toKoreanLabelNumber(5830000)).toBe('오백팔십삼만');
    expect(toKoreanLabelNumber(132000000)).toBe('일억삼천이백만');
    expect(toKoreanLabelNumber(302003000)).toBe('삼억이백만삼천');
  });

  it('labelType 옵션 "number" 는 숫자 부분은 한글이 아닌 숫자로 반환되어야 합니다.', () => {
    expect(toKoreanLabelNumber(123, { labelType: 'number' })).toBe('1백2십3');
    expect(toKoreanLabelNumber(1234, { labelType: 'number' })).toBe('1천2백3십4');
    expect(toKoreanLabelNumber(12345, { labelType: 'number' })).toBe('1만2천3백4십5');
    expect(toKoreanLabelNumber(20000, { labelType: 'number' })).toBe('2만');
    expect(toKoreanLabelNumber(5830000, { labelType: 'number' })).toBe('5백8십3만');
    expect(toKoreanLabelNumber(132000000, { labelType: 'number' })).toBe('1억3천2백만');
    expect(toKoreanLabelNumber(302003000, { labelType: 'number' })).toBe('3억2백만3천');
  });

  it('0 은 빈문자로 반환되어야 합니다.', () => {
    expect(toKoreanLabelNumber(0)).toBe('');
    expect(toKoreanLabelNumber(0, { labelType: 'number' })).toBe('');
  });
});
