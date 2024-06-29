function createTokenManager() {
  let accessToken: string | null = null;

  return {
    setToken: (token: string) => {
      accessToken = token;
    },
    getToken: () => accessToken,
  };
}

const tokenManager = createTokenManager();

export default tokenManager;
