import type { Metadata } from 'next';
import type { AppRouterPageProps } from '@web/shared/types';
import { ModalTestView } from '@web/features/sample/ui/modal-test-view';

export const metadata: Metadata = {
  title: '샘플 타이틀!',
};

export default function Page({ searchParams }: AppRouterPageProps) {
  console.log('searchParams', searchParams);

  return <ModalTestView />;
}
