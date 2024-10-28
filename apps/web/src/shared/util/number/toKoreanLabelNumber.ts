interface Options {
  labelType?: 'korean' | 'number' | '';
}

const UNIT_SPLIT1 = ['', '십', '백', '천'];
const UNIT_SPLIT2 = ['', '만', '억', '조', '경', '해'];
const LABEL_KOR = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
const LABEL_NUM = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * 숫자를 한글로 반환
 * ex) console.log(toKoreanLabelNumber(132000000)); // "일억삼천이백만"
 */
export const toKoreanLabelNumber = (value: number, options?: Options) => {
  const { labelType = 'korean' } = options || {};
  const refLabel = labelType === 'korean' ? LABEL_KOR : LABEL_NUM;
  const labels = [];
  const valueStr = value?.toString() || '';
  const valueArray = valueStr.split('').reverse();
  const unitSplit2Len = Math.ceil(valueStr.length / 4);
  for (let i = 0; i < unitSplit2Len; i++) {
    const number = valueArray.splice(0, 4);
    let result = number
      .map((val, index) =>
        val === '0' ? '' : refLabel[Number(val)] + UNIT_SPLIT1[index]
      )
      .reverse()
      .join('');
    if (result) result += UNIT_SPLIT2[i];
    labels.unshift(result);
  }
  return labels.join('');
};
