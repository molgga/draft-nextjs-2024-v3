'use client';
import { useAuthUser } from '@web/features/auth/hooks/use-auth-user';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';

export default function BrandView() {
  useLayoutActiveEffect(PageActiveKey.Brand);
  const authUser = useAuthUser();

  return (
    <div>
      <div style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(authUser, null, 2)}
      </div>
    </div>
  );
}
