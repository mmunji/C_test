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
};

export default ROUTES;
