import customFetchInstance from "@/services/customFetch";

export const myAPIs = {
  getUser: async () => {
    return customFetchInstance.authFetch<MyInfo>(
      "/my/userInfo",
      "GET",
      { next: { revalidate: 3600, tags: ["user"] } },
      true,
    );
  },

  getActivityCount: async () => {
    const data = await customFetchInstance.authFetch<
      Record<ActivityCount, number>
    >("/my/CountSumByUser", "GET", {
      next: { tags: ["my"] },
    });
    return data;
  },

  getBookmark: async () => {
    const data = await customFetchInstance.authFetch<Bookmark[]>(
      "/my/BookmarkByUser",
      "GET",
      { next: { revalidate: 3600, tags: ["my"] } },
    );
    return data;
  },

  getBadges: async () => {
    const data = await customFetchInstance.authFetch<ObtainedBadge[]>(
      "/my/BadgeByUser",
      "GET",
      {
        next: { revalidate: 3600, tags: ["badges"] },
      },
    );
    return data;
  },

  getReviewCounts: async () => {
    const data = await customFetchInstance.authFetch<BadgeCount[]>(
      "/my/ReviewByGenreFromUser",
      "GET",
      { next: { revalidate: 3600, tags: ["my"] } },
    );
    return data;
  },

  getPenaltyInfo: async () => {
    const data =
      await customFetchInstance.authFetch<ReportStatus>("/my/DamageByUser");
    return data;
  },

  getReview: async () => {
    const data = await customFetchInstance.authFetch<PostreviewDTO[]>(
      "/my/ReviewByUser/desc",
      "GET",
      { next: { revalidate: 3600, tags: ["my"] } },
    );
    return data;
  },
  getLog: async () => {
    const data = await customFetchInstance.authFetch<Log[]>(
      "/my/LogByUser/desc",
      "GET",
      { next: { revalidate: 3600, tags: ["my"] } },
    );
    return data;
  },
};
