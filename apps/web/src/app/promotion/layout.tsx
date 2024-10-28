'use client';
import { type PropsWithChildren } from 'react';
import { MainLayout } from '@web/features/layout/ui/composition/main-layout';

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
