'use client';
import { useRouter } from 'next/navigation';

export function PromotionTestView() {
  const router = useRouter();

  const onHistoryBack = () => {
    console.log('onHistoryBack');
    router.back();
  };

  const onReplace = () => {
    console.log('onReplace');
    router.replace('/notice');
  };

  const onPush = () => {
    console.log('onPush');
    router.push('/notice');
  };

  return (
    <div>
      promotion-test-view
      <div>
        <button type="button" onClick={onHistoryBack}>
          onHistoryBack
        </button>
        <button type="button" onClick={onReplace}>
          onReplace
        </button>
        <button type="button" onClick={onPush}>
          onPush
        </button>
      </div>
    </div>
  );
}
