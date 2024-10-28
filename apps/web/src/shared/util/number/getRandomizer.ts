/**
 * seed 지정시 가급적 편향되지 않는 난수 생성기를, 미저정시 Math.random 을 반환.
 * @param [seed]
 * @see https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 * @example
 * const random = getRandomizer();
 * console.log(random()); // random number
 */
export function getRandomizer(seed?: number): () => number {
  if (typeof seed === 'number') {
    return () => {
      const x = Math.sin(seed++) * 179426549;
      return x - Math.floor(x);
    };
  } else {
    return Math.random;
  }
}
