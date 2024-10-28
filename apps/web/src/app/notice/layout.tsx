import { type PropsWithChildren } from 'react';
import { MainLayout } from '@web/features/layout/ui/composition/main-layout';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
