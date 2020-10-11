import config from "../config";

export default class TokenService {
    saveAuthToken(token) {
      window.localStorage.setItem(config.TOKEN_KEY, token);
    }
    getAuthToken() {
      return window.localStorage.getItem(config.TOKEN_KEY);
    }
    clearAuthToken() {
      window.localStorage.removeItem(config.TOKEN_KEY);
    }
    hasAuthToken() {
      return !!TokenService.getAuthToken();
    }
    makeBasicAuthToken(userName, password) {
      return window.btoa(`${userName}:${password}`);
    }
  };
  