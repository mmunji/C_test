import { useQuery } from "@tanstack/react-query";

import { tokenManager } from "../auth/tokenManager";
import { keywordAPIs } from "./keywordAPIs";
import { KEYWORD_QUERY_KEYS } from "./keywordQueryKeys";

export function useGetMyKeyword(movieId: number) {
  const accessToken = tokenManager.getToken();
  return useQuery({
    queryKey: KEYWORD_QUERY_KEYS.myKeyword(accessToken, movieId),
    queryFn: async () => {
      const { data, res } = await keywordAPIs.getMyKeyword(movieId);

      return { data, res };
    },
    enabled: !!accessToken,
  });
}
