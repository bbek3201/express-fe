const TOKEN_KEY = "todo-tester-token";
const USERNAME_KEY = "todo-tester-username";

export const auth = {
  getToken(): string | null {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(TOKEN_KEY);
  },
  getUsername(): string | null {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(USERNAME_KEY);
  },
  set(username: string, token: string) {
    window.localStorage.setItem(USERNAME_KEY, username);
    window.localStorage.setItem(TOKEN_KEY, token);
  },
  clear() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USERNAME_KEY);
  },
};
