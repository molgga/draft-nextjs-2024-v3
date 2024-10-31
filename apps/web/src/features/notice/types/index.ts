export interface NoticeListReq {
  page?: number;
  size?: number;
  searchText?: string;
}

export interface NoticeListRes {
  total?: number;
  list: NoticeVo[];
}

export interface NoticeDetailReq {
  id: number | string;
}

export interface NoticeDetailRes extends NoticeVo {}

export interface NoticeCreateReq {
  title: string;
  content: string;
}

export interface NoticeCreateRes {
  success?: boolean;
}

export interface NoticeVo {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}
