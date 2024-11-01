import { getNoticeDetail } from '@web/features/notice/api/notice-api';
import { NoticeDetailView } from '@web/features/notice/ui/notice-detail-view';
import type { AppRouterPageProps } from '@web/shared/types';

// export const dynamic = 'force-dynamic';
export const revalidate = 3;

export async function generateMetadata({ params }: AppRouterPageProps<'id'>) {
  const id = params?.id;
  const response = await getNoticeDetail({ id });
  return {
    title: response.data?.title,
  };
}

export default async function Page({ params }: AppRouterPageProps<'id'>) {
  console.log('notice detail page');
  const id = params?.id;
  const response = await getNoticeDetail({ id });
  return (
    <>
      <div>notice page</div>
      <br />
      <div>now: {Date.now()}</div>
      <br />
      <div>
        server response.data:{' '}
        <span style={{ whiteSpace: 'pre' }}>
          {JSON.stringify(response.data, null, 2)}
        </span>
      </div>
      <div>server response.error: {JSON.stringify(response.error)}</div>
      <br />
      <div>
        <NoticeDetailView />
      </div>
    </>
  );
}
