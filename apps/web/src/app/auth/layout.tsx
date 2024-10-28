import { type PropsWithChildren } from 'react';
import { FullContentLayout } from '@web/features/layout/ui/composition/full-content-layout';

export default function Layout({ children }: PropsWithChildren) {
  return <FullContentLayout>{children}</FullContentLayout>;
}
