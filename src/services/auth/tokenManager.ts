export const tokenManager = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("access-token", token);
    }
  },
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("access-token");
    }
    return null;
  },
  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access-token");
    }
  },
};
