export interface PaginationConfig {
  page: number;
  size: number;
  total: number;
  range?: number;
}

export interface PaginationResult {
  rangeStart: number; // 페이징 만들기 시작 번호
  rangeEnd: number; // 페이지 만들기 종료 번호
  expectPrevJump: number; // 맨 앞 페이지 번호
  expectPrev: number; // 이전 페이지로 건너뛸 때 페이지 번호
  expectNext: number; // 다음 페이지로 건너뛸 때 페이지 번호
  expectNextJump: number; // 맨 끝 페이지 번호
  ablePrevJump: boolean; // 건너띄기 버튼 disabled 조건
  ablePrev: boolean;
  ableNext: boolean;
  ableNextJump: boolean;
  pageRange: number[];
}
