export const MOVIE_QUERY_KEYS = {
  bookmark: {
    all: () => ["bookmark"],
    detail: (movieId: number) => [...MOVIE_QUERY_KEYS.bookmark.all(), movieId],
  },
};
