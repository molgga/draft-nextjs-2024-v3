'use client';
import { useSampleModalA } from '@web/features/sample/hooks/use-sample-modal-a';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';

export function ModalTestView() {
  useLayoutActiveEffect(PageActiveKey.SampleModal);

  const modalA = useSampleModalA();

  const onOpen1 = () => {
    modalA.open({ testPass: new Date().toLocaleString() });
  };

  modalA.onClosed((result) => {
    console.log('modalA onClosed:', result);
  });

  return (
    <div>
      <h1>Sample!!!!!!!!!!!!!</h1>
      <div>
        <button onClick={onOpen1} type="button">
          onOpen1
        </button>
      </div>
    </div>
  );
}
