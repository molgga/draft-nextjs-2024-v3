import { type PropsWithChildren } from 'react';
import { MainBsideLayout } from '@web/features/layout/ui/composition/main-bside-layout';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainBsideLayout
      bside={<div className="ui-bg-slate-50">+ bside layout</div>}
    >
      {children}
    </MainBsideLayout>
  );
}
