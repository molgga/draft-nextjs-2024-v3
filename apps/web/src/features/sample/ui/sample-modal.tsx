import { X as IconClose } from 'lucide-react';
import { Button } from '@ui/components/ui/button';
import { useJdModalRef } from '@web/shared/libs/jd-modal';
import { JustifyPanel } from '@web/widgets/panel/justify-panel';
import type { SampleModalData, SampleModalResult } from '../types';

export function SampleModal() {
  const modalRef = useJdModalRef<SampleModalResult, SampleModalData>();
  const { title = 'Title!', testPass } = modalRef.data || {};

  const handleClose = () => {
    modalRef.close();
  };

  const handleCancel = () => {
    modalClose({ testResult: 'cancel!' });
  };

  const handleSave = () => {
    modalClose({ testResult: 'saved!' });
  };

  const modalClose = (result?: SampleModalResult) => {
    modalRef.close(result);
  };

  return (
    <div className="ui-flex ui-flex-col ui-h-full ui-w-[90vw] ui-max-w-[480px]">
      <header className="ui-flex ui-p-2">
        <h2 className="ui-flex-1 ui-p-2 ui-text-lg ui-font-bold">{title}</h2>
        <div className="">
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <IconClose />
          </Button>
        </div>
      </header>

      <div className="ui-flex-1 ui-overflow-y-auto ui-overscroll-none">
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
        <div className="ui-m-5 ui-p-10 ui-border">testPass: {testPass}</div>
      </div>

      <JustifyPanel
        className="ui-p-5"
        aside={
          <Button size="sm" variant="outline" onClick={handleCancel}>
            취소
          </Button>
        }
        bside={
          <Button size="sm" onClick={handleSave}>
            저장
          </Button>
        }
      />
    </div>
  );
}
