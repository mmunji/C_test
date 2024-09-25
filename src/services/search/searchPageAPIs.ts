import customFetchInstance from "@/services/customFetch";

export const searchPageAPIs = {
  getMovies: async (key: string) => {
    const data = await customFetchInstance.fetch<MovieResult[]>(
      `/find/findMovie?query=${key}`,
    );
    return data;
  },
  getReviews: async (key: string) => {
    const data = await customFetchInstance.fetch<ReviewResult[]>(
      `/find/findReview?query=${key}`,
    );
    return data;
  },
  getRelatedKeywords: async (key: string) => {
    const data = await customFetchInstance.fetch<string[]>(`/find/PopularFind`);
    return data;
  },
};
