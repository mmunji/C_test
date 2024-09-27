export const TALK_QUERY_KEYS = {
  all: () => ["talk"],
  detail: (movieId: number, talkId: number) => [
    ...TALK_QUERY_KEYS.all(),
    movieId,
    talkId,
  ],
  my: (movieId: number) => [...TALK_QUERY_KEYS.all(), movieId],
  infiniteTalks: (movieId: number) => [...TALK_QUERY_KEYS.all(), movieId],
  infiniteMovieReplies: (parentReviewId: number) => [
    ...TALK_QUERY_KEYS.all(),
    parentReviewId,
  ],
};
