export const TALK_QUERY_KEYS = {
  all: () => ["talk"],
  detail: (movieId: number, talkId: number) => [
    ...TALK_QUERY_KEYS.all(),
    movieId,
    talkId,
  ],
  myStar: (accessToken: string) => ["myStar", accessToken],
  myTalk: (accessToken: string) => ["myTalk", accessToken],
  infiniteTalks: (movieId?: number) => [...TALK_QUERY_KEYS.all(), movieId],
  infiniteMovieReplies: (parentReviewId?: number) => [
    ...TALK_QUERY_KEYS.all(),
    parentReviewId,
  ],
};
