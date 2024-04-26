import { authKey } from "@/constants/authKey";
import { decodedToken } from "@/utils/jwt";
import {
  setToLocalStorage,
  getFromLocalStorage,
  removerFromLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ token }: { token: string }) => {
  return setToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removerFromLocalStorage(authKey);
};
