import { toPagination } from "../to-pagination";

describe("페이지네이션 테스트", () => {
  test("페이징 테스트 1", () => {
    const result = toPagination({ page: 1, size: 10, total: 33 });
    expect(result.rangeStart).toBe(1);
    expect(result.rangeEnd).toBe(4);
    expect(result.ablePrevJump).toBe(false);
    expect(result.ablePrev).toBe(false);
    expect(result.ableNext).toBe(false);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(4);
    expect(result.expectNextJump).toBe(4);
  });

  test("페이징 테스트 2", () => {
    const result = toPagination({ page: 2, size: 10, total: 33 });
    expect(result.rangeStart).toBe(1);
    expect(result.rangeEnd).toBe(4);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(false);
    expect(result.ableNext).toBe(false);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(4);
    expect(result.expectNextJump).toBe(4);
  });

  test("페이징 테스트 3", () => {
    const result = toPagination({ page: 4, size: 10, total: 33 });
    expect(result.rangeStart).toBe(1);
    expect(result.rangeEnd).toBe(4);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(false);
    expect(result.ableNext).toBe(false);
    expect(result.ableNextJump).toBe(false);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(4);
    expect(result.expectNextJump).toBe(4);
  });

  test("페이징 테스트 4", () => {
    const result = toPagination({ page: 4, size: 10, total: 155 });
    expect(result.rangeStart).toBe(1);
    expect(result.rangeEnd).toBe(10);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(false);
    expect(result.ableNext).toBe(true);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(11);
    expect(result.expectNextJump).toBe(16);
  });

  test("페이징 테스트 5", () => {
    const result = toPagination({ page: 10, size: 10, total: 155 });
    expect(result.rangeStart).toBe(1);
    expect(result.rangeEnd).toBe(10);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(false);
    expect(result.ableNext).toBe(true);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(11);
    expect(result.expectNextJump).toBe(16);
  });

  test("페이징 테스트 6", () => {
    const result = toPagination({ page: 11, size: 10, total: 155 });
    expect(result.rangeStart).toBe(11);
    expect(result.rangeEnd).toBe(16);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(true);
    expect(result.ableNext).toBe(false);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(16);
    expect(result.expectNextJump).toBe(16);
  });

  test("페이징 테스트 7", () => {
    const result = toPagination({ page: 16, size: 10, total: 155 });
    expect(result.rangeStart).toBe(11);
    expect(result.rangeEnd).toBe(16);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(true);
    expect(result.ableNext).toBe(false);
    expect(result.ableNextJump).toBe(false);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(16);
    expect(result.expectNextJump).toBe(16);
  });

  test("페이징 테스트 8", () => {
    const result = toPagination({ page: 16, size: 10, total: 234 });
    expect(result.rangeStart).toBe(11);
    expect(result.rangeEnd).toBe(20);
    expect(result.ablePrevJump).toBe(true);
    expect(result.ablePrev).toBe(true);
    expect(result.ableNext).toBe(true);
    expect(result.ableNextJump).toBe(true);
    expect(result.expectPrevJump).toBe(1);
    expect(result.expectPrev).toBe(1);
    expect(result.expectNext).toBe(21);
    expect(result.expectNextJump).toBe(24);
  });
});
