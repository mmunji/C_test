import { useState } from "react";

import { login } from "@/constants/login";
import { tokenManager } from "@/services/auth/tokenManager";

export default function useNeedLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = tokenManager.getToken();

  const handleNeedLogin = () => {
    if (!accessToken) {
      if (confirm(login.NEED_LOGIN_TEXT)) {
        setIsOpen(true);
        return true;
      } else {
        alert("취소합니다.");
        return true;
      }
    }

    return false;
  };

  return { isOpen, setIsOpen, handleNeedLogin };
}
