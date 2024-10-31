import clsx from 'clsx';
import { forwardRef } from 'react';

interface JustifyPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  aside?: React.ReactNode;
  asideFlex?: number;
  bside?: React.ReactNode;
  bsideFlex?: number;
  children?: React.ReactNode;
  centerFlex?: number;
}

export const JustifyPanel = forwardRef<HTMLDivElement, JustifyPanelProps>(
  ({ className, ...props }, ref) => {
    const {
      aside,
      asideFlex = 1,
      bside,
      bsideFlex = 1,
      children,
      centerFlex = 1,
      ...attrs
    } = props;

    return (
      <div
        ref={ref}
        className={clsx('ui-flex ui-mt-4 ui-items-center', className)}
        {...attrs}
      >
        <div
          className={clsx('ui-flex ui-justify-start', `ui-flex-${asideFlex}`)}
        >
          {aside}
        </div>
        <div
          className={clsx(
            'ui-flex ui-flex ui-justify-center',
            `ui-flex-${centerFlex}`
          )}
        >
          {children}
        </div>
        <div className={clsx('ui-flex ui-justify-end', `ui-flex-${bsideFlex}`)}>
          {bside}
        </div>
      </div>
    );
  }
);

JustifyPanel.displayName = 'JustifyPanel2';
