'use client';
import { useSearchParams } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { FullPanel } from '@web/widgets/panel/full-center-panel';

interface LoginViewProps {
  referer?: string;
}

export function LogoutView({ referer }: LoginViewProps) {
  const searchParams = useSearchParams();
  let callbackUrl = decodeURIComponent(
    searchParams.get('callbackUrl') || referer || '/'
  );

  if (
    callbackUrl.includes('/auth/login') ||
    callbackUrl.includes('/auth/logout')
  ) {
    callbackUrl = '/';
  }

  useEffect(() => {
    console.log(callbackUrl);
    signOut({ callbackUrl })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [callbackUrl]);

  return (
    <FullPanel absolute>
      <div className="ui-flex ui-flex-col">
        <div className="ui-text-sm ui-text-gray-400">
          로그아웃 처리중 입니다.
        </div>
      </div>
    </FullPanel>
  );
}
