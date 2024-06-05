import { create } from "zustand";

interface UseCategoryTabStore {
  activeCategoryTab: string;
  setActiveCategoryTab: (category: string) => void;
}

export const useCategoryTabStore = create<UseCategoryTabStore>((set) => ({
  activeCategoryTab: "키워드",
  setActiveCategoryTab: (category: string) =>
    set(() => ({ activeCategoryTab: category })),
}));
