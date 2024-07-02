function createTokenManager() {
  return {
    setToken: (token: string) => localStorage.setItem("access-token", token),
    getToken: () => localStorage.getItem("access-token"),
    removeToken: () => localStorage.removeItem("access-token"),
  };
}

const tokenManager = createTokenManager();

export default tokenManager;
