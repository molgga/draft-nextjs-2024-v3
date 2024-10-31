'use client';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui/components/ui/table';
import { Button } from '@ui/components/ui/button';
import { useQueryNoticeList } from '@web/features/notice/hooks/use-query-notice';
import { useLayoutActiveEffect } from '@web/features/layout/hook/use-layout-active-effect';
import { JustifyPanel } from '@web/widgets/panel/justify-panel';
import { ListPagination } from '@web/widgets/pagination/list-pagination';

export function NoticeListView() {
  useLayoutActiveEffect('notice');

  const formMethods = { getValues: () => ({ page: 1 }) }; // todo react-hook-forms
  const isEnabled = true;

  const { data: { list: noticeList = [], total: noticeTotal = 0 } = {} } =
    useQueryNoticeList({ ...formMethods.getValues() }, isEnabled);

  const handlePaging = (page: number) => {
    console.log('handlePaging', page);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="ui-w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="ui-text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {noticeList.map((model) => {
            return (
              <TableRow key={model.id}>
                <TableCell className="ui-font-medium">{model.id}</TableCell>
                <TableCell>{model.title}</TableCell>
                <TableCell className="ui-text-right">{model.dateYmd}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <JustifyPanel
        bside={
          <Button asChild>
            <Link prefetch={false} href="/notice/create">
              글쓰기
            </Link>
          </Button>
        }
      >
        <ListPagination
          page={1}
          size={10}
          total={noticeTotal}
          range={5}
          toHref={({ paging }) => `/notice/list?page=${paging}`}
          onPaging={handlePaging}
          onPagingPrev={handlePaging}
          onPagingNext={handlePaging}
        />
      </JustifyPanel>
    </div>
  );
}
