import { toFormat } from '../date';
import {
  TEXT_ID_LIST,
  WORD_LIST,
  INT_LIST,
  COLOR_LIST,
  IMAGE_LIST,
} from './seed';

/**
 * 랜덤으로 숫자(int) 뽑기
 * @example
 * console.log(randomRangeInt(0, 10)); // 0 ~ 10
 */
export function randomRangeInt(min: number, max: number) {
  if (max < min) return 0;
  if (max === min) return max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomizeFromSeeds(seeds: any[], min = 1, max = 1) {
  const len = getRange(min, max);
  const arr = [];
  const seedLen = seeds.length - 1;
  for (let i = 0; i < len; i++) {
    const index = getRange(0, seedLen);
    arr.push(seeds[index]);
  }
  return arr;
}

export function getRange(min: number, max: number) {
  return randomRangeInt(min, max);
}

export function getRandomOneBy(seeds: any[]) {
  return randomizeFromSeeds(seeds, 1, 1)[0];
}

export function getRandomTextId() {
  return randomizeFromSeeds(TEXT_ID_LIST, 1, 1)[0];
}

export function getRandomWord(): string {
  return randomizeFromSeeds(WORD_LIST, 1, 1)[0];
}

export function getRandomWords(min = 1, max = 1): string[] {
  return randomizeFromSeeds(WORD_LIST, min, max);
}

export function getRandomText(min = 1, max = 1) {
  return getRandomWords(min, max).join(' ');
}

export function getRandomColor() {
  return randomizeFromSeeds(COLOR_LIST, 1, 1)[0];
}

export function getRandomColors(min = 1, max = 1) {
  return randomizeFromSeeds(COLOR_LIST, min, max);
}

export function getRandomImage() {
  return randomizeFromSeeds(IMAGE_LIST, 1, 1)[0];
}

export function getRandomImages(min = 1, max = 1) {
  return randomizeFromSeeds(IMAGE_LIST, min, max);
}

export function getRandomId() {
  return Date.now() + Math.round(Math.random() * 999999);
}

export function getRandomInt(min = 1, max = 1) {
  return getRange(min, max);
}

export function getRandomInts(min = 1, max = 1) {
  return randomizeFromSeeds(INT_LIST, min, max);
}

export function getRandomBoolean() {
  return Math.random() <= 0.5;
}

export function getRandomDateAt(min = 1546300800000, max = 0) {
  return getRange(min, max || Date.now());
}

export function getRandomDateYMD(min = 1546300800000, max = 0) {
  return toFormat(getRandomDateAt(), { format: 'YYYY-MM-DD' });
}
