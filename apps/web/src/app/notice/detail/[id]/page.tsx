import { WrapErrorBoundary } from '@web/features/error/ui/wrap-error-boundary';
import { throwError, throwNotFound } from '@web/features/error/utils';
import { getNoticeDetail } from '@web/features/notice/api/notice-api';
import { NoticeDetailView } from '@web/features/notice/ui/notice-detail-view';
import type { AppRouterPageProps } from '@web/shared/types';

// export const dynamic = 'force-dynamic';
export const revalidate = 3;

export async function generateMetadata({ params }: AppRouterPageProps<'id'>) {
  console.log('################## generateMetadata', params);
  const response = await getNoticeDetail({ id: 1 });
  return {
    title: response.data?.title,
  };
}

export default async function Page({ params }: AppRouterPageProps<'id'>) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@ notice page');
  const id = params?.id;
  const response = await getNoticeDetail({ id });
  if (response.error) {
    console.log(response.error);
    if (response.error?.status === 404) {
      throwNotFound('공지사항 찾을 수 없음');
    } else {
      throwError(response.error?.status);
    }
  }

  return (
    <WrapErrorBoundary>
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
    </WrapErrorBoundary>
  );
}
