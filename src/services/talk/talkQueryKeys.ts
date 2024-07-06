export const TALK_QUERY_KEYS = {
  all: () => ["talk"],
  detail: (id: number) => [...TALK_QUERY_KEYS.all(), id],
  infiniteMovieQueryKeys: (movieId: number) => [
    ...TALK_QUERY_KEYS.all(),
    movieId,
  ],
};
