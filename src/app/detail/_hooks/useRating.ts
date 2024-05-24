import { useState } from "react";

export default function useRating() {
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [clickedValue, setClickedValue] = useState(false);
  const [driveTalkText, setDriveTalkText] = useState("");

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

  return {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    driveTalkText,
    setDriveTalkText,
    handleDriveTalk,
  };
}
