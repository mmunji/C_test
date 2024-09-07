import { create } from "zustand";

interface UseTotalTalksStore {
  totalTalks: number;
  setTotalTalks: (totalTalks: number) => void;
}

const useTotalTalksStore = create<UseTotalTalksStore>((set) => ({
  totalTalks: 0,
  setTotalTalks: (totalTalks: number) =>
    set(() => ({ totalTalks: totalTalks })),
}));

export default useTotalTalksStore;
