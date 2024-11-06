import {
  useJdModalInterceptClose,
  useJdModalService,
  // StackRight,
} from "@web/shared/libs/jd-modal";
import { ModalTest } from "../ui/modal-test";
import type { ModalTestData, ModalTestResult } from "./types";

export const useSampleModal = () => {
  const modalService = useJdModalService();
  const interceptClose = useJdModalInterceptClose<ModalTestResult>();
  const open = (data?: ModalTestData) => {
    const modalRef = modalService.open({
      data,
      component: <ModalTest />,
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
