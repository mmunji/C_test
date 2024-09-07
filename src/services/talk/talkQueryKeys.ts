export const TALK_QUERY_KEYS = {
  all: () => ["talk"],
  detail: (movieId: number, talkId: number) => [
    ...TALK_QUERY_KEYS.all(),
    movieId,
    talkId,
  ],
  infiniteMovieQueryKeys: (movieId: number) => [
    ...TALK_QUERY_KEYS.all(),
    movieId,
  ],
};
