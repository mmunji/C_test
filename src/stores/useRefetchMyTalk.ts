import { create } from "zustand";

interface UseRefetchMyTalk {
  myTalk: any;
  setMyTalk: (myTalk: any) => void;
  refetchMyTalk: any;
  setRefetchMyTalk: (refetchMyTalk: any) => void;
}

const useRefetchMyTalk = create<UseRefetchMyTalk>((set) => ({
  myTalk: null,
  setMyTalk: (myTalk: any) => set(() => ({ myTalk: myTalk })),
  refetchMyTalk: null,
  setRefetchMyTalk: (refetchMyTalk: any) =>
    set(() => ({ refetchMyTalk: refetchMyTalk })),
}));

export default useRefetchMyTalk;
