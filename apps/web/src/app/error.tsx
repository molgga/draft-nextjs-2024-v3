'use client';

import { ErrorBox } from '@web/features/error/ui/error-box';
import { FullContentLayout } from '@web/features/layout/ui/composition/full-content-layout';
import { FullPanel } from '@web/shared/ui/panel/full-center-panel';

type ErrorInstance = Error & {
  message?: string;
  digest?: string;
};

interface ErrorPageProps {
  error: ErrorInstance;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  console.log('ErrorPage', error);
  return (
    <FullContentLayout>
      <FullPanel>
        <ErrorBox />
      </FullPanel>
    </FullContentLayout>
  );
}
