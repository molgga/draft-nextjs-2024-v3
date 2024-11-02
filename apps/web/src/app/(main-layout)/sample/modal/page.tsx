import type { Metadata } from 'next';
import type { AppRouterPageProps } from '@web/shared/types';
import { SampleModalView } from '@web/features/sample-modal/ui/sample-modal-view';

export const metadata: Metadata = {
  title: '모달!',
};

export default function Page({ searchParams }: AppRouterPageProps) {
  console.log('searchParams', searchParams);

  return <SampleModalView />;
}
