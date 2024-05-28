import { create } from "zustand";

interface UsePaletteStore {
  gradientStyle: string;

  setGradientStyle: (newGradientStyle: string) => void;
}

export const usePaletteStore = create<UsePaletteStore>((set) => ({
  gradientStyle: "",
  setGradientStyle: (newGradientStyle: string) =>
    set({ gradientStyle: newGradientStyle }),
}));
