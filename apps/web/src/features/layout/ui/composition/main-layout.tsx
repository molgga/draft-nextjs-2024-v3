'use client';
import { type PropsWithChildren } from 'react';
import { SidebarProvider } from '@ui/components/ui/sidebar';
import { DefaultAside } from '@web/features/layout/ui/aside/default-aside';
import { DefaultFooter } from '@web/features/layout/ui/footer/default-footer';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <DefaultAside />
      <div className="ui-flex-1  ui-flex ui-flex-col">
        <main className="ui-relative ui-flex-1 ui-py-4 ui-px-10">
          {children}
        </main>
        <DefaultFooter />
      </div>
    </SidebarProvider>
  );
}
