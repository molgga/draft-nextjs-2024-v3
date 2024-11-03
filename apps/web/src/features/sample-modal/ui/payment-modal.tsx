import { X as IconClose } from "lucide-react";
import { Button } from "@ui/components/ui/button";
import { useJdModalRef } from "@web/shared/libs/jd-modal";
import { JustifyPanel } from "@web/shared/ui/panel/justify-panel";
import type { PaymentModalData, PaymentModalResult } from "../types";
import { useNestedModal } from "../hooks/use-nested-modal";
import { NestedModal } from "./nested-modal";

export function PaymentModal() {
  const modalRef = useJdModalRef<PaymentModalResult, PaymentModalData>();
  const nestedModal = useNestedModal();

  const viewState = (() => {
    const { title, testPass } = modalRef.data || {};
    return {
      modalTitle: title || "Title",
      modalPassData: testPass,
    };
  })();

  const handleClose = () => {
    modalClose();
  };

  const handleCancel = () => {
    modalClose({ testResult: "cancel!" });
  };

  const handleSave = () => {
    modalClose({ testResult: "saved!" });
  };

  const handleNestedOpen = () => {
    nestedModal.open({
      openTestComponent: <NestedModal />,
    });
  };

  const modalClose = (result?: PaymentModalResult) => {
    modalRef.close(result);
  };

  return (
    <div className="ui-flex ui-flex-col ui-w-[90vw] ui-max-w-[480px] ui-h-[90vh] ui-max-h-[480px]">
      <header className="ui-flex ui-p-2">
        <h2 className="ui-flex-1 ui-p-2 ui-text-lg ui-font-bold">
          {viewState.modalTitle}
        </h2>
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
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
        <div className="ui-m-5 ui-p-10 ui-border">
          testPass: {viewState.modalPassData}
        </div>
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
