import { create } from 'zustand';

interface LayoutStore {
  activeNaviKey: string;
  setActiveNaviKey: (activeNaviKey: string) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  activeNaviKey: '',
  setActiveNaviKey: (activeNaviKey) => set({ activeNaviKey }),
}));
