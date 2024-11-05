import { useQuery } from "@tanstack/react-query";

import { authAPIS } from "./authAPIs";
import { AUTH_QUERY_KEYS } from "./authQueryKeys";

export function useCheckNickname(nickname: string) {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.checkNick(nickname),
    queryFn: () => authAPIS.checkNick(nickname),
  });
}
