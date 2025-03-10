import type { JdModalService, JdModalRef } from '../../core';

export interface HistoryStarategy {
  createEntry: (config: HistoryEntryConfig) => HistoryEntryHook;
}

export interface HistoryEntryConfig {
  modalService: JdModalService;
  modalRef: JdModalRef;
}

export interface HistoryEntryHook {
  touch: () => void;
  pop: () => void;
}

export type HistoryEntrySetup = (
  config: HistoryEntryConfig
) => HistoryEntryHook;

export interface ModalPopEvent {
  _preventModalClose?: boolean;
}

/**
 * 모달 window popstate 이벤트
 */
export interface ModalPopStateEvent extends PopStateEvent, ModalPopEvent {}

/**
 * 모달 window hash change 이벤트
 */
export interface ModalHashChangeEvent extends HashChangeEvent, ModalPopEvent {}
