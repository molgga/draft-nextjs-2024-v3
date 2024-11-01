'use client';
import type { ErrorPageProps } from '@web/features/error/types';
import { DefaultErrorPage } from '@web/features/error/ui/default-error-page';

export default function ErrorPage(props: ErrorPageProps) {
  return <DefaultErrorPage {...props} />;
}
