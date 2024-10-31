'use client';
import { PromotionTestView } from '@web/features/promotion/ui/promotion-test-view';

export default function Page() {
  console.log('promotion page B');
  return (
    <div>
      <div>promotion page B: use client</div>
      <PromotionTestView />
    </div>
  );
}
