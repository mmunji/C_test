import { ChangeEvent, useState } from "react";

export default function useModal() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [detailedReason, setDetailedReason] = useState("");

  const toggleChceked = () => setIsChecked(!isChecked);
  const onDetailedReasonChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDetailedReason(e.target.value);
  const onSelectedIndexChange = (index: number) => setSelectedIndex(index);

  return {
    isChecked,
    toggleChceked,
    selectedIndex,
    onDetailedReasonChange,
    detailedReason,
    onSelectedIndexChange,
  };
}
