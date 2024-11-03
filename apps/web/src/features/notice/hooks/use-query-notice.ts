import { useQuery, keepPreviousData, useMutation } from "@tanstack/react-query";
import { useToast } from "@ui/hooks/use-toast";
import * as NoticeApi from "@web/features/notice/api/notice-api";
import type { NoticeListReq } from "@web/features/notice/types";
import { toNoticeItem } from "@web/features/notice/model/notice-item.model";
import { toQueryKeyWithParams } from "@web/shared/libs/api-client";

/**
 * 목록 가져오기
 */
export function useQueryNoticeList(params: NoticeListReq, enabled = true) {
  return useQuery({
    queryKey: toQueryKeyWithParams("notice-list", params),
    queryFn: () => NoticeApi.getNoticeList(params),
    placeholderData: keepPreviousData,
    enabled,
    throwOnError: true,
    select: (data) => {
      const { total, list } = data.data || {};
      return {
        total,
        list: (list || []).map((vo) => toNoticeItem(vo)),
      };
    },
  });
}

export function useQueryNoticeCreate() {
  const { toast: toastBox } = useToast();
  return useMutation({
    mutationFn: NoticeApi.createNotice,
    onSuccess: () => {
      console.log("success");
      toastBox({
        title: "공지사항",
        description: "저장되었습니다.",
        duration: 2000,
      });
    },
  });
}
