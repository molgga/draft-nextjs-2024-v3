import { isNumber } from '../isNumber';

describe('utils/number/isNumber', () => {
  test('isNumber', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber("0")).toBe(true);
    expect(isNumber("1")).toBe(true);
    expect(isNumber(" 1 ")).toBe(true);
    expect(isNumber("1e+10")).toBe(true);
    expect(isNumber(new Date())).toBe(true);

    expect(isNumber("1abc")).toBe(false);
    expect(isNumber(" ")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(Date)).toBe(false);
  });

  test('isNumber', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber("0")).toBe(true);
    expect(isNumber("1")).toBe(true);
    expect(isNumber(" 1 ")).toBe(true);
    expect(isNumber("1e+10")).toBe(true);
    expect(isNumber(new Date())).toBe(true);
    
    expect(isNumber("1abc")).toBe(false);
    expect(isNumber(" ")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(Date)).toBe(false);
  });
});
