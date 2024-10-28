import { useJdModalRef } from '@web/shared/libs/jd-modal';
import type { SampleModalData, SampleModalResult } from '../types';
import { SampleModalHeader } from './sample-modal-header';
import { SampleModalBody } from './sample-modal-body';
import Styles from './sample-modal.module.css';

export function SampleModal() {
  const modalRef = useJdModalRef<SampleModalResult, SampleModalData>();
  const { testPass } = modalRef.data || {};
  console.log('SampleModal');
  const modalClose = (result?: SampleModalResult) => {
    modalRef.close(result);
  };

  return (
    <div className={Styles['modal-box']}>
      <SampleModalHeader modalClose={modalClose} title="Sample A" />
      <SampleModalBody message={testPass} modalClose={modalClose} />
    </div>
  );
}
