/**
 * seed 지정시 가급적 편향되지 않는 난수 생성기를, 미저정시 Math.random 을 반환.
 * @example
 * const random = getRandomizer();
 * console.log(random()); // random number
 */
export function getRandomizer(seed?: number): () => number {
  if (typeof seed === 'number') {
    let cv = seed;
    return () => {
      const x = Math.sin(seed ? cv++ : 0) * 179426549;
      return x - Math.floor(x);
    };
  }
  return Math.random;
}
