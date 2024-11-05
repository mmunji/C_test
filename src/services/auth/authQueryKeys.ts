export const AUTH_QUERY_KEYS = {
  auth: () => ["auth"],
  checkNick: (nickname: string) => [...AUTH_QUERY_KEYS.auth(), nickname],
};
