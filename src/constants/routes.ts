const ROUTES = {
  MAIN: "/",
  DETAIL: "/detail",
  MY: {
    default: "/my",
    activity: () => `${ROUTES.MY.default}/activity`,
    account: () => `${ROUTES.MY.default}/account`,
    favorites: () => `${ROUTES.MY.default}/favorites`,
  },
  SEARCH: {
    default: "/search",
    getById: (title: string) => `${ROUTES.SEARCH.default}?query=${title}`,
  },
  RIDERECT: {
    default: "/redirect",
    without_nickname: () => `${ROUTES.RIDERECT.default}/without-nickname`,
  },
  SIGN_UP_COMPLETE: "/sign-up-complete",
};

export default ROUTES;
