"use client";
import { Suspense, lazy } from "react";
import { SomeComp1 } from "./some-comp1";

// const SomeComp1 = lazy(() =>
//   import('./some-comp1').then((m) => ({ default: m.SomeComp1 }))
// );

export function SuspendTestView() {
  return (
    <div className="ui-p-10">
      <Suspense fallback={<div>loading</div>}>
        <div>
          <SomeComp1 />
        </div>
      </Suspense>
    </div>
  );
}
