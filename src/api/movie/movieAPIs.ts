import { API_URL } from "@/constants/api_url";

export const movieAPIs = {
  getMovieDetail: async (movieId: number) => {
    const res = await fetch(`${API_URL}/movie/${movieId}`);
    const data: MovieDetailData = await res.json();
    return data;
  },
  getHidingPiece: async () => {
    const res = await fetch(`${API_URL}/movie/HidingPiece`);
    const data: MovieHidingPiece = await res.json();
    return data;
  },
  getMentionKeword: async () => {
    const res = await fetch(`${API_URL}/movie/MentionKeword`);
    const data: MentionKeword = await res.json();
    return data;
  },
  getMovieReviewComments: async () => {
    const res = await fetch(`${API_URL}/movie/TotalReviewCount`);
    const data = await res.json();
    return data;
  },
};
