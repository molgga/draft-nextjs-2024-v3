interface Options {
  unitSpace?: boolean;
}

const UNIT_SPLIT = ['', '만', '억', '조', '경', '해'];

/**
 * 숫자를 한글/한국식 라벨로 반환
 * ex) console.log(toKoreanLabelNumberFormat(203290200)); // "2억 329만 200"
 */
export const toKoreanLabelNumberFormat = (value: number, options?: Options) => {
  const { unitSpace = true } = options || {};
  const labels = [];
  const labelUnitSpace = unitSpace ? ' ' : '';
  const valueStr = value?.toString() || '';
  const valueArray = valueStr.split('').reverse();
  const unitSplit2Len = Math.ceil(valueStr.length / 4);
  for (let i = 0; i < unitSplit2Len; i++) {
    const number = Number(valueArray.splice(0, 4).reverse().join(''));
    const formatNumber = Intl.NumberFormat('ko-KR').format(number);
    let result = formatNumber === '0' ? '' : formatNumber;
    if (result) result += UNIT_SPLIT[i] + labelUnitSpace;
    labels.unshift(result);
  }
  return labels.join('').trim();
};
