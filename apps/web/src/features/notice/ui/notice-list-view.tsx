'use client';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui/components/ui/table';
import { useQueryNoticeList } from '@web/features/notice/hooks/use-query-notice';
import { useLayoutActiveEffect } from '@web/features/layout/hook/use-layout-active-effect';
import { AlignPanel } from '@web/shared/ui/panel/align-panel';

export function NoticeListView() {
  useLayoutActiveEffect('notice');

  const formMethods = { getValues: () => ({ page: 1 }) }; // todo react-hook-forms
  const isEnabled = true;

  const { data: { list: noticeList = [], total: noticeTotal = 0 } = {} } =
    useQueryNoticeList({ ...formMethods.getValues() }, isEnabled);

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

      <div>
        <Link prefetch={false} href="/notice/create">
          글쓰기
        </Link>
      </div>

      <AlignPanel>1</AlignPanel>
    </div>
  );
}
