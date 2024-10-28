import { create } from 'zustand';

interface TestStore {
  foo: number;
  increase: () => void;
}

export const testStore = create<TestStore>((set) => ({
  foo: 1,
  setFoo: (foo: number) => {
    return { foo };
  },
  increase: () => {
    set((state) => {
      return { foo: state.foo + 1 };
    });
  },
}));
