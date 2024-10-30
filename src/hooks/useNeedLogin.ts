import { useState } from "react";

import { tokenManager } from "@/services/auth/tokenManager";

export default function useNeedLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = tokenManager.getToken();

  const handleNeedLogin = () => {
    if (!accessToken) {
      setIsOpen(true);
      return true;
    }

    return false;
  };

  return { isOpen, setIsOpen, handleNeedLogin };
}
