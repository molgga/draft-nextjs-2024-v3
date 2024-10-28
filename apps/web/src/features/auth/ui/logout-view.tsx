'use client';
import { useSearchParams } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

interface LoginViewProps {
  referer?: string;
}

export function LogoutView({ referer }: LoginViewProps) {
  const searchParams = useSearchParams();
  let callbackUrl = decodeURIComponent(
    searchParams.get('callbackUrl') || referer || '/'
  );

  if (
    callbackUrl.startsWith('/auth/login') ||
    callbackUrl.startsWith('/auth/logout')
  ) {
    callbackUrl = '/';
  }

  useEffect(() => {
    signOut({ callbackUrl })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [callbackUrl]);

  return <div>logout</div>;
}
