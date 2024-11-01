import { getNoticeList } from '@web/features/notice/api/notice-api';
import { toNoticeItem } from '@web/features/notice/model/notice-item.model';
import { NoticeListView2 } from '@web/features/notice/ui/notice-list-view2';

export const dynamic = 'force-dynamic';
// export const revalidate = 30;

// interface PageProps extends AppRouterPageProps<never, 'page' | 'size' | 'searchText'> {
interface PageProps {
  searchParams: {
    page?: string;
    size?: string;
    searchText?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@ notice list page2');
  const page = Number(searchParams.page) || 1;
  const size = Number(searchParams.size) || 10;
  const searchText = (searchParams.searchText || '').toString();

  const { data } = await getNoticeList({ page, size, searchText });
  const noticeList = (data?.list || []).map((vo) => toNoticeItem(vo));
  return <NoticeListView2 list={noticeList} total={data?.total} />;
}
