"use client";
// import { SuspendTestView } from '@web/features/suspend/ui/suspend-test-view';
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SuspendTestView } from "@web/features/suspend/ui/suspend-test-view";
// const SuspendTestView = dynamic(
//   () =>
//     import('@web/features/suspend/ui/suspend-test-view').then(
//       (m) => m.SuspendTestView
//     ),
//   {}
// );

export default function Page() {
  console.log("suspend page A");
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <div>suspend page A</div>
        <SuspendTestView />
      </Suspense>
    </div>
  );
}
