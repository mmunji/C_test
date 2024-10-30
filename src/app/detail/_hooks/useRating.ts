import { useEffect, useState } from "react";

import useNeedLogin from "@/hooks/useNeedLogin";

interface UseRatingProps {
  initialValue?: number;
}

export default function useRating({ initialValue = 0 }: UseRatingProps) {
  const [showTalkForm, setShowTalkForm] = useState(false);
  const [ratingValue, setRatingValue] = useState<number>(initialValue);
  const [clickedValue, setClickedValue] = useState(false);
  const [driveTalkText, setDriveTalkText] = useState("");
  const [readyToRating, setReadyToRating] = useState(false);
  const { isOpen, setIsOpen, handleNeedLogin } = useNeedLogin();

  useEffect(() => {
    if (clickedValue) {
      if (handleNeedLogin()) {
        setClickedValue(false);
        setReadyToRating(false);
      } else {
        setClickedValue(true);
        setReadyToRating(true);
      }
    }
  }, [clickedValue, handleNeedLogin]);

  const handleDriveTalk = () => {
    if (ratingValue === 0.5 || ratingValue === 1 || ratingValue === 1.5) {
      setDriveTalkText("별로였군요ㅠㅠ 더 자세한 얘기도 해주세요 :)");
    } else if (ratingValue === 2 || ratingValue === 2.5) {
      setDriveTalkText("아쉬웠군요. 더 자세한 얘기도 해주세요 :)");
    } else if (ratingValue === 3 || ratingValue === 3.5) {
      setDriveTalkText("보통이었군요! 더 자세한 얘기도 해주세요 :)");
    } else if (ratingValue === 4 || ratingValue === 4.5) {
      setDriveTalkText("좋았군요! 더 자세한 얘기도 해주세요 :)");
    } else if (ratingValue === 5) {
      setDriveTalkText("최고였군요! 더 자세한 얘기도 해주세요 :)");
    }
  };

  useEffect(() => {
    if (clickedValue && !showTalkForm) handleDriveTalk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedValue, showTalkForm]);

  useEffect(() => {
    if (showTalkForm) setDriveTalkText("");
  }, [setDriveTalkText, showTalkForm]);

  return {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    driveTalkText,
    setDriveTalkText,
    readyToRating,
    isOpen,
    setIsOpen,
    showTalkForm,
    setShowTalkForm,
    handleDriveTalk,
  };
}
