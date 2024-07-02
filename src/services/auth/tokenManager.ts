export const tokenManager = {
  setToken: (token: string) => localStorage.setItem("access-token", token),
  getToken: () => localStorage.getItem("access-token"),
  removeToken: () => localStorage.removeItem("access-token"),
};
