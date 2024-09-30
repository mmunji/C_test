import { create } from "zustand";

interface TabStore {
  activeSearchTab: string;
  setActiveSearchTab: (tab: string) => void;
}

const useSearchTabStore = create<TabStore>((set) => ({
  activeSearchTab: "전체",
  setActiveSearchTab: (type) => set(() => ({ activeSearchTab: type })),
}));

export default useSearchTabStore;
