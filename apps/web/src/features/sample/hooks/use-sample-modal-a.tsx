import {
  useJdModalInterceptClose,
  useJdModalService,
  StackRight,
  // StackLeft,
  // StackBottom,
  // StackTop,
} from '@web/shared/libs/jd-modal';
import type { SampleModalData, SampleModalResult } from '../types';
import { SampleModal } from '../ui/sample-modal';

export const useSampleModalA = () => {
  const modalService = useJdModalService();
  const interceptClose = useJdModalInterceptClose<SampleModalResult>();

  const open = (data?: SampleModalData) => {
    const modalRef = modalService.open({
      data,
      component: <SampleModal />,
      openStrategy: new StackRight(),
      // openStrategy: new StackLeft(),
      // openStrategy: new StackBottom(),
      // openStrategy: new StackTop(),
      overlayClose: true,
    });
    interceptClose.intercept(modalRef);
  };

  return {
    open,
    onClosed: interceptClose.onClosed,
  };
};
