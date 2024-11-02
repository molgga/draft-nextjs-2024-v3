'use client';
import { Button } from '@ui/components/ui/button';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';
import { usePaymentModal } from '@web/features/sample-modal/hooks/use-payment-modal';

export function SampleModalView() {
  console.log('SampleModalView');
  useLayoutActiveEffect(PageActiveKey.SampleModal);

  const paymentModal = usePaymentModal();

  const handleOpenModal = () => {
    paymentModal.open({ testPass: new Date().toLocaleString() });
  };

  paymentModal.onClosed((result) => {
    console.log('paymentModal onClosed:', result);
  });

  return (
    <div>
      <Button type="button" onClick={handleOpenModal}>
        OpenModal
      </Button>
    </div>
  );
}
