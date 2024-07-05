import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseTotalTalksStore {
  totalTalks: number;
  setTotalTalks: (totalTalks: number) => void;
}

const useTotalTalksStore = create(
  persist<UseTotalTalksStore>(
    (set, _get) => ({
      totalTalks: 0,
      setTotalTalks: (totalTalks: number) =>
        set(() => ({ totalTalks: totalTalks })),
    }),
    {
      name: "total-talks-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useTotalTalksStore;
