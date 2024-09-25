import { CustomFetch } from "@/services/my/myAPIs";

export const searchPageAPIs = {
  getMovies: async (key: string): Promise<MovieResult[]> => {
    const data = await new CustomFetch().fetch(`/find/findMovie?query=${key}`);
    return data;
  },
  getReviews: async (key: string): Promise<ReviewResult[]> => {
    const data = await new CustomFetch().fetch(`/find/findReview?query=${key}`);
    return data;
  },
  getRelatedKeywords: async (key: string): Promise<string[]> => {
    const data = await new CustomFetch().fetch(`/find/PopularFind`);
    return data;
  },
};
