'use client';
import { Button } from '@ui/components/ui/button';
import { useSampleModalA } from '@web/features/sample/hooks/use-sample-modal-a';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';

export function ModalTestView() {
  console.log('ModalTestView');
  useLayoutActiveEffect(PageActiveKey.SampleModal);

  const modalA = useSampleModalA();

  const handleOpenModal = () => {
    modalA.open({ testPass: new Date().toLocaleString() });
  };

  modalA.onClosed((result) => {
    console.log('modalA onClosed:', result);
  });

  return (
    <div>
      <Button type="button" onClick={handleOpenModal}>
        OpenModal
      </Button>
    </div>
  );
}
