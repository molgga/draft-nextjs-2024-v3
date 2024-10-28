import { type PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>main-layout</div>
      <div>{children}</div>
    </div>
  );
}
