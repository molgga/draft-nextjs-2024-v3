import type { PropsWithChildren } from 'react';

export function FullPanel({ children }: PropsWithChildren) {
  return (
    <div className="ui-flex-1 ui-w-full ui-h-full ui-flex ui-items-center ui-justify-center">
      {children}
    </div>
  );
}
