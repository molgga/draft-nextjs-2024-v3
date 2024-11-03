import type { PaginationConfig, PaginationResult } from "./types";

export const toPagination = (config: PaginationConfig): PaginationResult => {
  const { page, size, total, range = 10 } = config;
  const maxPage = Math.ceil(total / size); // 최대 이동 가능 페이지
  const indexOfRange = Math.floor((page - 1) / range); // 범위 단위의 인덱스
  const maxOfRange = Math.floor((maxPage - 1) / range); // 최대 범위 단위의 인덱스
  const rangeStart = Math.max(0, indexOfRange) * range;
  const rangeEnd = Math.min(maxPage, rangeStart + range);
  const expectPrevJump = 1;
  const expectPrev = Math.max(1, (indexOfRange - 1) * range + 1);
  const expectNext = Math.min(maxPage, (indexOfRange + 1) * range + 1);
  const expectNextJump = maxPage;
  const ablePrevJump = page > 1;
  const ablePrev = indexOfRange > 0;
  const ableNext = indexOfRange < maxOfRange;
  const ableNextJump = page < expectNextJump;
  const safeRangeEnd = Math.max(1, rangeEnd);
  const safeRangeStart = Math.min(safeRangeEnd, rangeStart + 1);
  const pageRange: number[] = [];
  for (let i = rangeStart + 1; i < rangeEnd + 1; i++) {
    pageRange.push(i);
  }
  return {
    rangeStart: safeRangeStart,
    rangeEnd: safeRangeEnd,
    expectPrevJump,
    expectPrev,
    expectNext,
    expectNextJump,
    ablePrevJump,
    ablePrev,
    ableNext,
    ableNextJump,
    pageRange,
  };
};
