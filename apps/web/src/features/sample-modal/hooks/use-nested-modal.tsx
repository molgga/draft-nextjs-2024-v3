import {
  useJdModalInterceptClose,
  useJdModalService,
} from '@web/shared/libs/jd-modal';
import type { NestedModalData, NestedModalResult } from '../types';
// import { NestedModal } from '../ui/nested-modal';

export const useNestedModal = () => {
  const modalService = useJdModalService();
  const interceptClose = useJdModalInterceptClose<NestedModalResult>();
  const open = (data: NestedModalData) => {
    const modalRef = modalService.open({
      data,
      component: data.openTestComponent,
      overlayClose: true,
      floatingMode: true,
      disableShadow: true,
    });
    interceptClose.intercept(modalRef);
  };
  return {
    open,
    onClosed: interceptClose.onClosed,
  };
};
