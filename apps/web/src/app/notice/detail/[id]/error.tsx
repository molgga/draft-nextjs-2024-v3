'use client';
import { ErrorBox } from '@web/features/error/ui/error-box';
import { FullPanel } from '@web/widgets/panel/full-center-panel';

export default function ErrorPage() {
  return (
    <FullPanel>
      <ErrorBox />
    </FullPanel>
  );
}