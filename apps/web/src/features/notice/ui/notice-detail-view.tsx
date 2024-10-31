'use client';

import { useRouter } from 'next/navigation';
import {
  PageActiveKey,
  useLayoutActiveEffect,
} from '@web/features/layout/hook/use-layout-active-effect';

export function NoticeDetailView() {
  console.log('NoticeDetailView');
  useLayoutActiveEffect(PageActiveKey.Notice);

  const dt = new Date().toLocaleString('ko-KR');
  console.log('notice-detail-view', dt);

  const router = useRouter();
  const onHistoryBack = () => {
    router.back();
  };

  const onReplaceBack = () => {
    router.replace('/notice');
  };

  return (
    <div>
      notice-detail-view
      <div>
        <button type="button" onClick={onHistoryBack}>
          onHistoryBack
        </button>
        <button type="button" onClick={onReplaceBack}>
          onReplaceBack
        </button>
      </div>
    </div>
  );
}
