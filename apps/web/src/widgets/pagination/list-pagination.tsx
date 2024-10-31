import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@ui/components/ui/pagination';
import { withEventPrevent } from '@web/shared/util/react/with-event-prevent';
import type { PaginationConfig } from './types';
import { toPagination } from './to-pagination';

interface ListPaginationProps extends PaginationConfig {
  page: number;
  size: number;
  total: number;
  range: number;
  onPaging?: (paging: number) => void;
  onPagingPrev?: (paging: number) => void;
  onPagingNext?: (paging: number) => void;
  // onPagingFirst?: (page: number) => void;
  // onPagingLast?: (page: number) => void;
  toHref?: (params: { paging: number }) => string;
}

export function ListPagination({
  page,
  size,
  total,
  range,
  onPaging,
  onPagingPrev,
  onPagingNext,
  toHref,
}: ListPaginationProps) {
  const pagination = toPagination({
    page,
    size,
    total,
    range,
  });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size="sm"
            href={toHref ? toHref({ paging: pagination.expectPrev }) : '#'}
            onClick={withEventPrevent(() =>
              onPagingPrev?.(pagination.expectPrev)
            )}
          />
        </PaginationItem>
        {pagination.pageRange.map((paging) => {
          return (
            <PaginationItem key={paging}>
              <PaginationLink
                size="sm"
                isActive={paging === page}
                href={toHref ? toHref({ paging }) : '#'}
                onClick={withEventPrevent(() => onPaging?.(paging))}
              >
                {paging}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            size="sm"
            href={toHref ? toHref({ paging: pagination.expectNext }) : '#'}
            onClick={withEventPrevent(() =>
              onPagingNext?.(pagination.expectNext)
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
