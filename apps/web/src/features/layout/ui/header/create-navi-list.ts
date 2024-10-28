export const createNaviList = () => {
  return [
    {
      key: 'home',
      name: '홈',
      href: '/',
    },
    {
      key: 'brand',
      name: '로그인 전용',
      href: '/brand',
    },
    {
      key: 'sample-modal',
      name: 'modal',
      href: '/sample/modal',
    },
    {
      key: 'sample-error-a',
      name: 'error-a',
      href: '/sample/error-a',
    },
    {
      key: 'sample-error-b',
      name: 'error-b',
      href: '/sample/error-b',
    },
    {
      key: '-',
      name: 'not found',
      href: '/sample/9999999',
    },
    {
      key: 'notice',
      name: 'notice',
      href: '/notice/list',
    },
    {
      key: 'promotion-a',
      name: 'promotion a',
      href: '/promotion/a',
    },
    {
      key: 'promotion-b',
      name: 'promotion b',
      href: '/promotion/b',
    },
  ];
};
