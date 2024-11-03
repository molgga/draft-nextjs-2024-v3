import type { PropsWithChildren } from "react";
import clsx from "clsx";

interface FullPanelProps extends PropsWithChildren {
  absolute?: boolean;
}

export function FullPanel({ absolute, children }: FullPanelProps) {
  return (
    <div
      className={clsx(
        "ui-flex-1 ui-w-full ui-h-full ui-flex ui-items-center ui-justify-center",
        absolute && "ui-absolute",
      )}
    >
      {children}
    </div>
  );
}
