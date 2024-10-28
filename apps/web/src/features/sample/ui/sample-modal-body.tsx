import { useState } from 'react';
import type { SampleModalResult } from '../types';

interface SampleModalBodyProps {
  message?: string;
  modalClose?: (result?: SampleModalResult) => void;
}

export function SampleModalBody(props?: SampleModalBodyProps) {
  const [testValue, setTestValue] = useState(true);

  const handleCancel = () => {
    props?.modalClose?.({ testResult: 'cancel!' });
  };

  const handleSave = () => {
    props?.modalClose?.({ testResult: 'saved!' });
  };

  const handleToggleTestState = () => {
    setTestValue(!testValue);
  };

  return (
    <div>
      TestModalBody
      <div>message: {props?.message}</div>
      <button
        onClick={handleToggleTestState}
        style={{ padding: '20px' }}
        type="button"
      >
        test state toggle: {String(testValue)}
      </button>
      <div>
        <button onClick={handleCancel} type="button">
          취소
        </button>
        <button onClick={handleSave} type="button">
          저장
        </button>
      </div>
    </div>
  );
}
