'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { getNoticeList } from '@web/features/notice/api/notice-api';
import { useQueryNoticeList } from '@web/features/notice/hooks/use-query-notice';
import { useLayoutActiveEffect } from '@web/features/layout/hook/use-layout-active-effect';

export function NoticeListView() {
  useLayoutActiveEffect('notice');

  const formMethods = { getValues: () => ({ page: 1 }) }; // todo react-hook-forms
  const isEnabled = true;

  const { data: { list: noticeList = [], total: noticeTotal = 0 } = {} } =
    useQueryNoticeList({ ...formMethods.getValues() }, isEnabled);

  return (
    <div>
      notice list view
      <div>noticeTotal: {noticeTotal}</div>
      {noticeList.map((m) => {
        return (
          <div key={m.id}>
            <Link
              prefetch={false}
              href={`/notice/detail/${m.id}`}
              className="flex p-2 hover:bg-gray-100"
            >
              ({m.id}) {m.title}
            </Link>
          </div>
        );
      })}
      <div>
        <Link prefetch={false} href="/notice/create">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

export function NoticeListViewTestFetch() {
  const fetchList = async () => {
    console.log('###################');
    const response = await getNoticeList({});
    console.log(response);
  };

  useEffect(() => {
    void fetchList();
  }, []);

  return (
    <div>
      notice list view
      <div>
        <Link prefetch={false} href="/notice/detail/11111">
          11111
        </Link>
        <br />
        <Link prefetch={false} href="/notice/detail/22222">
          22222
        </Link>
        <br />
        <Link prefetch={false} href="/notice/detail/33333">
          33333
        </Link>
        <br />
        <Link prefetch={false} href="/notice/detail/">
          empty
        </Link>
        <br />
        <Link prefetch={false} href="/notice/detail/unknown">
          unknown
        </Link>
      </div>
    </div>
  );
}
