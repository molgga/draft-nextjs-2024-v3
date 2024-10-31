import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BookText, TriangleAlert, type LucideProps } from 'lucide-react';

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export interface NaviMainVo {
  key: string;
  icon: IconComponent;
  title: string;
  list: NaviSubVo[];
}

export interface NaviSubVo {
  key: string;
  title: string;
  href: string;
}

export const createNaviList = (): {
  mainList: NaviMainVo[];
} => {
  return {
    mainList: [
      {
        key: 'home',
        icon: BookText,
        title: '기능 테스트',
        list: [
          {
            key: 'brand',
            title: '로그인 전용 페이지',
            href: '/brand',
          },
          {
            key: 'notice',
            title: '게시판',
            href: '/notice/list',
          },
          {
            key: 'notice2',
            title: '게시판2',
            href: '/notice2/list',
          },
          {
            key: 'sample-modal',
            title: '모달',
            href: '/sample/modal',
          },
          {
            key: 'promotion-a',
            title: '테스트 페이지 A',
            href: '/promotion/a',
          },
          {
            key: 'promotion-b',
            title: '테스트 페이지 B',
            href: '/promotion/b',
          },
        ],
      },
      {
        key: 'test-error',
        icon: TriangleAlert,
        title: '오류 테스트',
        list: [
          {
            key: 'sample-error-a',
            title: '서버 컴포넌트 에러',
            href: '/sample/error-a',
          },
          {
            key: 'sample-error-b',
            title: '클라이언트 에러 + 바운더리',
            href: '/sample/error-b',
          },
          {
            key: '-',
            title: '없는 경로(404)',
            href: '/sample/9999999',
          },
        ],
      },
    ],
  };
};
