import { useEffect } from 'react';
import { useLayoutStore } from '@web/features/layout/store/use-layout-store';

export enum PageActiveKey {
  Home = 'home',
  SampleModal = 'sample-modal',
  Notice = 'notice',
  Brand = 'brand',
}

export const useLayoutActiveEffect = (activeKey: string) => {
  const setActiveNaviKey = useLayoutStore((state) => state.setActiveNaviKey);

  useEffect(() => {
    setActiveNaviKey(activeKey);
    return () => {
      setActiveNaviKey('');
    };
  }, [setActiveNaviKey, activeKey]);

  return {
    setActiveNaviKey,
  };
};
