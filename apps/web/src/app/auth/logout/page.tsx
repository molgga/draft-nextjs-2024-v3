import { headers } from 'next/headers';
import { LogoutView } from '@web/features/auth/ui/logout-view';

export default function Page() {
  const reqHeaders = headers();
  const referer = reqHeaders.get('referer') || '';
  return <LogoutView referer={referer} />;
}
