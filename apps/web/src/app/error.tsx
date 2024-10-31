'use client';

import { ErrorBox } from '@web/features/error/ui/error-box';
import { ErrorDigestCode } from '@web/features/error/utils';
import { FullContentLayout } from '@web/features/layout/ui/composition/full-content-layout';
import { FullPanel } from '@web/widgets/panel/full-center-panel';

type ErrorInstance = Error & {
  message?: string;
  digest?: string;
};

interface ErrorPageProps {
  error: ErrorInstance;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  console.log('ErrorPage');
  if (error.digest === ErrorDigestCode.NotFound) {
    console.log('#ErrorPage ', ErrorDigestCode.NotFound);
  }
  return (
    <FullContentLayout>
      <FullPanel>
        <ErrorBox />
      </FullPanel>
    </FullContentLayout>
  );
}
