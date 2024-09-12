export const MOO_USER_KEY: string = "MOO_USER";

export const setToken = (data: any): void => {
  localStorage.setItem(process.env.auth as string, JSON.stringify(data));
};

export const clearToken = (): void => {
  localStorage.removeItem(process.env.auth as string);
};

const local: boolean = typeof window !== "undefined";
export const getUserLocalStorage = (): any => {
  if (local) {
    const token: string | null = localStorage.getItem(MOO_USER_KEY);
    return token ? JSON.parse(token) : null;
  }
};

export const getLoggedInAccount = (): any | null => {
  if (local) {
    const account: any = getUserLocalStorage();
    return account && Object.keys(account).length > 0 ? account : null;
  }
  return null;
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const isAuthenticated = (): boolean => {
  const user: any | null = getLoggedInAccount();
  if (user === null) {
    return false;
  } else {
    // const { isVerify: is_verify, is_verify_2fa } = user || {};
    // if (!is_verify && !is_verify_2fa) {
    //   return false;
    // } else {
    return true;
    // }
  }
};

export const getToken = (): string | false => {
  const user: string | null = localStorage.getItem("user");
  return user ? JSON.parse(user)?.token : false;
};

export default function auth(): any | boolean {
  if (typeof window !== "undefined") {
    const userData: string | null = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : false;
  }
  return false;
}
