import { debounce } from '../debounce';

describe('utils/functional/debounce', () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });

  afterEach(() => {
    vitest.useRealTimers();
  });

  test('debounce 테스트', () => {
    let callCount = 0;
    function executeDebounce() {
      callCount++;
    }
    const onDebounce = debounce(executeDebounce, 100);
    onDebounce();
    onDebounce();
    onDebounce();
    onDebounce();
    onDebounce();
    vitest.advanceTimersByTime(150);
    expect(callCount).toBe(1);
  });
});
