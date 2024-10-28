import { type Metadata } from 'next';
import BrandView from '@web/features/brand/ui/brand-view';

export const metadata: Metadata = {
  title: '브랜드 타이틀!',
};

export default function Page() {
  return <BrandView />;
}
