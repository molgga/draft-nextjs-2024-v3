import { type PropsWithChildren } from 'react';
import { DefaultFooter } from '../footer/default-footer';

export function FullContentLayout({ children }: PropsWithChildren) {
  // @TODO disabledCenter
  return (
    <div className="ui-flex ui-flex-col ui-min-h-screen">
      <div className="ui-flex ui-justify-center ui-pt-4 ui-pb-2">
        <a className="ui-font-bold ui-text-xl" href="/">
          Logo
        </a>
      </div>
      <div className="ui-flex-1 ui-flex ui-items-center ui-justify-center">
        {children}
      </div>
      <div className="">
        <DefaultFooter />
      </div>
    </div>
  );
}
