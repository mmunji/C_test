import { ChangeEvent, useCallback, useState } from "react";

export default function useModal() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [detailedReason, setDetailedReason] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleChceked = useCallback(() => setIsChecked((prev) => !prev), []);
  const onDetailedReasonChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDetailedReason(e.target.value),
    [],
  );
  const onSelectedIndexChange = useCallback(
    (index: number) => setSelectedIndex(index),
    [],
  );

  return {
    isChecked,
    toggleChceked,
    selectedIndex,
    onDetailedReasonChange,
    detailedReason,
    onSelectedIndexChange,
    isDropdownOpen,
    setIsDropdownOpen,
  };
}
