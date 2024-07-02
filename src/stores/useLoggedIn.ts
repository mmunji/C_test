import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import tokenManager from "@/utils/tokenManager";

interface UseLoggedInStore {
  loggedIn: boolean;
  setLoggedIn: (authState: boolean) => void;
  logout: () => void;
}

const useLoggedInStore = create(
  persist<UseLoggedInStore>(
    (set, _get) => ({
      loggedIn: false,
      setLoggedIn: (authState: boolean) => set(() => ({ loggedIn: authState })),
      logout: () =>
        set(() => {
          tokenManager.removeToken();
          return { loggedIn: false };
        }),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLoggedInStore;
