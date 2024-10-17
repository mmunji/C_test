import { create } from "zustand";

interface UseClickedEditMyTalkProps {
  clickedEditMyTalk: boolean;
  setClickedEditMyTalk: (clickedEditMyTalk: boolean) => void;
}

const useClickedEditMyTalk = create<UseClickedEditMyTalkProps>((set) => ({
  clickedEditMyTalk: false,
  setClickedEditMyTalk: (clickedEditMyTalk: boolean) =>
    set(() => ({ clickedEditMyTalk: clickedEditMyTalk })),
}));

export default useClickedEditMyTalk;
