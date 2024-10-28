import { toKoreanLabelNumberFormat } from '../toKoreanLabelNumberFormat';

describe('utils/number/toKoreanLabelNumberFormat', () => {
  it('숫자가 한글 표현으로 반환되어야 합니다.', () => {
    expect(toKoreanLabelNumberFormat(0)).toBe('');
    expect(toKoreanLabelNumberFormat(123)).toBe('123');
    expect(toKoreanLabelNumberFormat(1234)).toBe('1,234');
    expect(toKoreanLabelNumberFormat(12345)).toBe('1만 2,345');
    expect(toKoreanLabelNumberFormat(20000)).toBe('2만');
    expect(toKoreanLabelNumberFormat(5830000)).toBe('583만');
    expect(toKoreanLabelNumberFormat(132000000)).toBe('1억 3,200만');
    expect(toKoreanLabelNumberFormat(103200000)).toBe('1억 320만');
    expect(toKoreanLabelNumberFormat(203290200)).toBe('2억 329만 200');
    expect(toKoreanLabelNumberFormat(213291200)).toBe('2억 1,329만 1,200');
    expect(toKoreanLabelNumberFormat(302003000)).toBe('3억 200만 3,000');
    expect(toKoreanLabelNumberFormat(302000001)).toBe('3억 200만 1');
  });

  it('unitSpace 옵션을 false 로 지정시 단위 사이에 공백이 없어야 합니다.', () => {
    expect(toKoreanLabelNumberFormat(0, { unitSpace: false })).toBe('');
    expect(toKoreanLabelNumberFormat(123, { unitSpace: false })).toBe('123');
    expect(toKoreanLabelNumberFormat(1234, { unitSpace: false })).toBe('1,234');
    expect(toKoreanLabelNumberFormat(12345, { unitSpace: false })).toBe('1만2,345');
    expect(toKoreanLabelNumberFormat(20000, { unitSpace: false })).toBe('2만');
    expect(toKoreanLabelNumberFormat(5830000, { unitSpace: false })).toBe('583만');
    expect(toKoreanLabelNumberFormat(132000000, { unitSpace: false })).toBe('1억3,200만');
    expect(toKoreanLabelNumberFormat(103200000, { unitSpace: false })).toBe('1억320만');
    expect(toKoreanLabelNumberFormat(203290200, { unitSpace: false })).toBe('2억329만200');
    expect(toKoreanLabelNumberFormat(213291200, { unitSpace: false })).toBe('2억1,329만1,200');
    expect(toKoreanLabelNumberFormat(302003000, { unitSpace: false })).toBe('3억200만3,000');
    expect(toKoreanLabelNumberFormat(302000001, { unitSpace: false })).toBe('3억200만1');
  });
});
