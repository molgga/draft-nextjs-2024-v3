import type { NoticeVo } from '@web/features/notice/types';

export type NoticeItemModel = ReturnType<typeof toNoticeItem>;

export const toNoticeItem = (vo: NoticeVo) => {
  const { id, title, content, date } = vo;
  return {
    id,
    title,
    content,
    date,
    dateYmd: date,
    dateAt: date,
  };
};
