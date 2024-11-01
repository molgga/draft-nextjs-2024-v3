'use client';
import { ErrorBox } from '@web/features/error/ui/error-box';
import { FullPanel } from '@web/widgets/panel/full-center-panel';
import { useErrorPageReset } from '../hook/use-error-page-reset';
import type { ErrorPageProps } from '../types';

export function DefaultErrorPage(props: ErrorPageProps) {
  useErrorPageReset(props);

  return (
    <FullPanel>
      <ErrorBox />
    </FullPanel>
  );
}
