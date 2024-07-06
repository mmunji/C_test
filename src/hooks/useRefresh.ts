import { useEffect } from "react";

import { authAPIS } from "@/services/auth/authAPIs";
import { tokenManager } from "@/services/auth/tokenManager";
import useLoggedInStore from "@/stores/useLoggedIn";

export default function useRefresh() {
  const NINE_MINUTES = 60 * 9 * 1000;
  const { loggedIn } = useLoggedInStore();

  useEffect(() => {
    const refresh = async () => {
      if (loggedIn) {
        const { res } = await authAPIS.refresh();
        const accessToken = res.headers.get("access");
        if (accessToken) {
          tokenManager.setToken(accessToken);
        }
      }
    };

    refresh();
    const interval = setInterval(() => {
      refresh();
    }, NINE_MINUTES);

    return () => clearInterval(interval);
  }, [NINE_MINUTES, loggedIn]);
}
