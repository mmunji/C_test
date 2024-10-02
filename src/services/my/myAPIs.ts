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
    const data =
      await customFetchInstance.authFetch<Record<ActivityCount, number>>(
        "/my/CountSumByUser",
      );
    return data;
  },

  getBookmark: async () => {
    const data =
      await customFetchInstance.authFetch<Bookmark[]>("/my/BookmarkByUser");
    return data;
  },

  getBadges: async () => {
    const data = await customFetchInstance.authFetch<ObtainedBadge[]>(
      "/my/BadgeByUser",
      "GET",
      {
        next: { tags: ["badges"] },
      },
    );
    return data;
  },

  getReviewCounts: async () => {
    const data = await customFetchInstance.authFetch<BadgeCount[]>(
      "/my/ReviewByGenreFromUser",
    );
    return data;
  },

  getReportStatus: async () => {
    const data =
      await customFetchInstance.authFetch<ReportStatus>("/my/DamageByUser");
    return data;
  },

  getReview: async () => {
    const data = await customFetchInstance.authFetch<PostreviewDTO[]>(
      "/my/ReviewByUser/desc",
      "GET",
      { next: { tags: ["review"] } },
    );
    return data;
  },
  getLog: async () => {
    const data =
      await customFetchInstance.authFetch<Log[]>("/my/LogByUser/desc");
    return data;
  },
};
