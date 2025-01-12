import { useState } from "react";

import { changeUserInfo } from "@/services/my/actions";

export default function useGenderForm(initialGender: MyInfo["gender"]) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentGender, setCurrentGender] =
    useState<MyInfo["gender"]>(initialGender);

  const resetGender = () => {
    setCurrentGender(initialGender);
  };

  const checkUnchanged = () => {
    return currentGender === initialGender;
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleGenderSave = async () => {
    const isUchanged = checkUnchanged();
    if (isUchanged) return setIsEditing(false);
    setIsLoading(true);
    const success = await changeUserInfo(currentGender, "gender");
    if (!success) resetGender();
    setIsLoading(false);
    setIsEditing(false);
  };

  const handleCurrentGenderChange = (gender: MyInfo["gender"]) => {
    setCurrentGender(gender);
  };

  return {
    isLoading,
    isEditing,
    handleGenderSave,
    currentGender,
    handleEditToggle,
    handleCurrentGenderChange,
  };
}
