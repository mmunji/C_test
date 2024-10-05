export const KEYWORD_QUERY_KEYS = {
  all: () => ["keyword"],
  myKeyword: (accessToken: string | null, movieId: number) => [
    ...KEYWORD_QUERY_KEYS.all(),
    accessToken,
    movieId,
  ],
};
