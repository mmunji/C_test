const ROUTES = {
  MAIN: "/",
  DETAIL: "/detail",
  MY: {
    default: "/my",
    activity: () => `${ROUTES.MY.default}/activity`,
    account: () => `${ROUTES.MY.default}/account`,
    favorites: () => `${ROUTES.MY.default}/favorites`,
  },
};

export default ROUTES;
