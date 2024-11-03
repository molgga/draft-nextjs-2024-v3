import { create } from "zustand";

/**
 * 레이아웃 관련 상태를 관리하는 스토어
 */
interface LayoutStore {
  /** 현재 활성화된 네비게이션 키 */
  activeNaviKey: string;
  /** 활성화된 네비게이션 키를 설정하는 함수 */
  setActiveNaviKey: (activeNaviKey: string) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  activeNaviKey: "",
  setActiveNaviKey: (activeNaviKey) => set({ activeNaviKey }),
}));
