import { X as IconClose } from 'lucide-react';
import { Button } from '@ui/components/ui/button';
import { useJdModalRef } from '@web/shared/libs/jd-modal';
import { JustifyPanel } from '@web/widgets/panel/justify-panel';
import type { NestedModalData, NestedModalResult } from '../types';
import { useNestedModal } from '../hooks/use-nested-modal';

export function NestedModal() {
  const modalRef = useJdModalRef<NestedModalResult, NestedModalData>();
  const nestedModal = useNestedModal();

  const handleClose = () => {
    modalClose();
  };

  const handleNestedOpen = () => {
    nestedModal.open({
      openTestComponent: <NestedModal />,
    });
  };

  const modalClose = (result?: NestedModalResult) => {
    modalRef.close(result);
  };

  return (
    <div className="ui-flex ui-flex-col ui-h-full ui-w-[90vw] ui-max-w-[480px]">
      <header className="ui-flex ui-p-2">
        <h2 className="ui-flex-1 ui-p-2 ui-text-lg ui-font-bold">중첩 모달</h2>
        <div className="">
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <IconClose />
          </Button>
        </div>
      </header>

      <div className="ui-flex-1 ui-overflow-y-auto ui-overscroll-none">
        <div className="ui-m-5 ui-p-10 ui-border">
          <Button variant="outline" onClick={handleNestedOpen}>
            중첩 열기
          </Button>
        </div>
      </div>

      <JustifyPanel
        className="ui-p-5"
        bside={
          <Button size="sm" onClick={handleClose}>
            닫기
          </Button>
        }
      />
    </div>
  );
}
