import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseLoggedInStore {
  loggedIn: boolean;
  setLoggedIn: (authState: boolean) => void;
}

const useLoggedInStore = create(
  persist<UseLoggedInStore>(
    (set, _get) => ({
      loggedIn: true,
      setLoggedIn: (authState: boolean) => set(() => ({ loggedIn: authState })),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useLoggedInStore;
