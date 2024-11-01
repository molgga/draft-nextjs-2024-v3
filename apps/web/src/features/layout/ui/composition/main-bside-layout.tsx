'use client';
import { type PropsWithChildren, type ReactNode } from 'react';

interface MainBsideLayoutProps extends PropsWithChildren {
  bside?: ReactNode | undefined;
}

export function MainBsideLayout({ children, bside }: MainBsideLayoutProps) {
  return (
    <div className="ui-relative ui-flex">
      <div className="ui-flex-1">{children}</div>
      {Boolean(bside) && <div className="ui-w-[200px]">{bside}</div>}
    </div>
  );
}
