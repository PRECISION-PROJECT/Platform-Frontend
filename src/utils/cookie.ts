import {
  deleteCookie,
  getCookie,
  OptionsType,
  setCookie,
} from "cookies-next/client";

export const deleteCookieData = (name: string) => {
  deleteCookie(name);
};

export const getCookieData = (name: string) => {
  return getCookie(name);
};

export const setCookieData = (
  name: string,
  value: string,
  expires?: number
) => {
  setCookie(name, value, {
    expires: expires ? new Date(expires) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    secure: true,
    path: "/",
    sameSite: "strict",
  });
};

