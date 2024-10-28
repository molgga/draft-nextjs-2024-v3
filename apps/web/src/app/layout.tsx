import './globals.css';
import '@repo/ui/globals.css';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR as NotoSansKr } from 'next/font/google';
import { AuthProvider } from '@web/providers/auth-provider';
import { ModalProvider } from '@web/providers/modal-provider';
import { QueryProvider } from '@web/providers/query-provider';

export const metadata: Metadata = {
  title: '기본 타이틀!',
  description: '기본 메타 디스크립션!',
};

const notoSansKr = NotoSansKr({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className={classNames(notoSansKr.className, 'h-full')}>
        <AuthProvider>
          <QueryProvider>
            <ModalProvider>{children}</ModalProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
