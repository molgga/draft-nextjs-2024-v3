import clsx from 'clsx';

interface JustifyPanelProps {
  aside?: React.ReactNode;
  asideFlex?: number;
  bside?: React.ReactNode;
  bsideFlex?: number;
  children?: React.ReactNode;
  centerFlex?: number;
}

export function JustifyPanel({
  aside,
  asideFlex = 1,
  bside,
  bsideFlex = 1,
  children,
  centerFlex = 1,
}: JustifyPanelProps) {
  return (
    <div className="ui-flex ui-mt-4 ui-items-center">
      <div className={clsx('ui-flex ui-justify-start', `ui-flex-${asideFlex}`)}>
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
