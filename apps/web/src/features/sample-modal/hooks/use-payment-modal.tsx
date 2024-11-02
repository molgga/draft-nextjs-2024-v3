import {
  useJdModalInterceptClose,
  useJdModalService,
  // StackRight,
} from '@web/shared/libs/jd-modal';
import type { PaymentModalData, PaymentModalResult } from '../types';
import { PaymentModal } from '../ui/payment-modal';

export const usePaymentModal = () => {
  const modalService = useJdModalService();
  const interceptClose = useJdModalInterceptClose<PaymentModalResult>();
  const open = (data?: PaymentModalData) => {
    const modalRef = modalService.open({
      data,
      component: <PaymentModal />,
      // openStrategy: new StackRight(),
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
