'use client';
import { useAuthUser } from '@web/features/auth/hooks/use-auth-user';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';

export default function BrandView() {
  console.log('BrandView');
  useLayoutActiveEffect(PageActiveKey.Brand);
  const authUser = useAuthUser();

  return (
    <div>
      <div>
        <h2 className="ui-text-lg ui-font-bold">로그인 전용 페이지</h2>
      </div>
      <div style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(authUser, null, 2)}
      </div>
    </div>
  );
}
