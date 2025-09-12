import { create } from "zustand";

type counterStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  plusFive: () => void;
  reset: () => void;
};

export const useCounter = create<counterStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  plusFive: () => set((state) => ({ count: state.count + 5 })),
  reset: () => set((state) => ({ count: (state.count = 0) })),
}));
