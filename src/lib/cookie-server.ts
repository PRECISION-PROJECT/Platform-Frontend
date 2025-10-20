"use server";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

type CookieOptions = {
  maxAge?: number;
  secure?: boolean;
  path?: string;
  sameSite?: "strict" | "lax" | "none";
};

// Original synchronous functions
async function setCookie(
  key: string,
  value: string,
  options: CookieOptions = {}
) {
  const {
    maxAge = 60 * 60 * 24 * 7,
    secure = true,
    path = "/",
    sameSite = "strict",
  } = options;
  const cookieStore = await cookies();
  cookieStore.set({
    name: key,
    value: value,
    maxAge,
    secure,
    path,
    sameSite,
  });
}

async function getCookie(key: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(key);
  return cookie?.value;
}

async function deleteCookie(key: string): Promise<ResponseCookies> {
  const cookieStore = await cookies();
  return cookieStore.delete(key);
}

async function hasCookie(key: string): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has(key);
}

// Async versions of the functions
export async function setCookieAsync(
  key: string,
  value: string,
  options: CookieOptions = {}
): Promise<void> {
  setCookie(key, value, options);
}

export async function getCookieAsync(key: string): Promise<string | undefined> {
  return await getCookie(key);
}

export async function deleteCookieAsync(key: string): Promise<ResponseCookies> {
  return await deleteCookie(key);
}

export async function hasCookieAsync(key: string): Promise<boolean> {
  return await hasCookie(key);
}
