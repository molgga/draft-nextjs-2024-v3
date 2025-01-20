import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { BookText, TriangleAlert, type LucideProps } from "lucide-react";

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
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
        key: "home",
        icon: BookText,
        title: "기능 테스트",
        list: [
          {
            key: "brand",
            title: "로그인 전용 페이지",
            href: "/brand",
          },
          {
            key: "notice",
            title: "게시판",
            href: "/notice/list",
          },
          {
            key: "notice2",
            title: "게시판2",
            href: "/notice2/list",
          },
          {
            key: "sample-modal",
            title: "모달",
            href: "/sample/modal",
          },
          {
            key: "promotion-a",
            title: "테스트 페이지 A",
            href: "/promotion/a",
          },
          {
            key: "promotion-b",
            title: "테스트 페이지 B",
            href: "/promotion/b",
          },
          {
            key: "suspend-a",
            title: "Suspend 테스트 A",
            href: "/suspend/a",
          },
          {
            key: "sample-rhf-1",
            title: "RHF + zod 1",
            href: "/sample/rhf/ex1",
          },
          {
            key: "sample-rhf-2",
            title: "RHF + zod 2",
            href: "/sample/rhf/ex2",
          },
        ],
      },
      {
        key: "test-error",
        icon: TriangleAlert,
        title: "오류 테스트",
        list: [
          {
            key: "sample-error-a",
            title: "에러 layout + error.tsx",
            href: "/sample/error-a",
          },
          {
            key: "sample-error-b",
            title: "에러 page + error.tsx",
            href: "/sample/error-b",
          },
          {
            key: "-",
            title: "없는 경로(404)",
            href: "/sample/9999999",
          },
        ],
      },
    ],
  };
};
