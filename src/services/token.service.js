import config from "../config";

const TokenService = {
    saveAuthToken(token) {
      window.localStorage.setItem(config.LIQUIDITY_TOKEN, token);
    },
    getAuthToken() {
      return window.localStorage.getItem(config.LIQUIDITY_TOKEN);
    },
    clearAuthToken() {
      window.localStorage.removeItem(config.LIQUIDITY_TOKEN);
    },
    hasAuthToken() {
      return !!TokenService.getAuthToken();
    },
    makeBasicAuthToken(username, password) {
      return window.btoa(`${username}:${password}`);
    }
};

export default TokenService;