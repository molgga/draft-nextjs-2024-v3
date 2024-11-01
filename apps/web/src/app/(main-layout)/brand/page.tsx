import { type Metadata } from 'next';
import BrandView from '@web/features/brand/ui/brand-view';

export const metadata: Metadata = {
  title: '브랜드 타이틀',
  description: '로그인 전용 페이지!',
};

export default function Page() {
  console.log('brand page');
  return <BrandView />;
}
