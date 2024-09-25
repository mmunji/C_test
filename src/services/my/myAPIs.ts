import customFetchInstance from "@/services/customFetch";

type ActivityCount = "rateCount" | "reviewCount" | "bookmarkCount";

export const myAPIs = {
  getUser: async () => {
    return customFetchInstance.authFetch<MyInfo>(
      "/my/userInfo",
      "GET",
      {},
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
    const data = await customFetchInstance.authFetch<EarnedBadge[]>(
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
    const data = await customFetchInstance.authFetch("/my/DamageByUser");
    return data;
  },
};
