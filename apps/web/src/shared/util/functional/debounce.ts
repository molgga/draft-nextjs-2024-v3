type Func<T extends unknown[]> = (...args: T) => void;

export function debounce<T extends unknown[]>(func: Func<T>, timemout: number): Func<T> {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timemout);
  };
}
