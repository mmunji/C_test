export const tokenManager = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("access-token", token);
    }
  },
  getToken: () => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("access-token");
    }
    return null;
  },
  removeToken: () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("access-token");
    }
  },
};
