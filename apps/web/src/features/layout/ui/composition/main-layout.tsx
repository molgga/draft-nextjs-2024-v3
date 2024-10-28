import { type PropsWithChildren } from 'react';
import { DefaultFooter } from '@web/features/layout/ui/footer/default-footer';
import { DefaultHeader } from '@web/features/layout/ui/header/default-header';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-full" style={{ minWidth: '960px' }}>
      <DefaultHeader />
      <main style={{ minHeight: `calc(100vh - 64px - 30px)` }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <DefaultFooter />
    </div>
  );
}
