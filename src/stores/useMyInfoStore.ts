import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseMyInfoStore {
  myInfo: MyInfo;
  setMyInfo: (newInfo: Partial<MyInfo>) => void;
}

const useMyInfoStore = create(
  persist<UseMyInfoStore>(
    (set, _get) => ({
      myInfo: {
        id: null,
        email: "",
        password: null,
        name: "",
        nickname: "",
        gender: "",
        birthday: "",
        profile: "",
        provider: "",
        role: "",
      },
      setMyInfo: (newInfo) =>
        set((state) => ({
          myInfo: { ...state.myInfo, ...newInfo },
        })),
    }),
    {
      name: "my-info",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useMyInfoStore;
