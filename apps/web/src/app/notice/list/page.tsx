import { NoticeListView } from '@web/features/notice/ui/notice-list-view';

// export const dynamic = 'force-dynamic';

export default function Page() {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@ notice list page');

  return (
    <div>
      <div>notice list page</div>
      <br />
      <NoticeListView />
    </div>
  );
}
