import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ECookie } from "./apis/http-instance";
import { env } from "./utils/const";
import { ROUTES } from "./utils/routes";

const baseURL = env.API_URL;

const authRoutes = ["/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/email-confirm"];
const protectedRoutes = ["/profile"]; 

type TRefreshTokenResponse = {
  token?: string;
  refreshToken?: string;
  tokenExpires?: number;
};

async function requestRefreshToken(
  refreshToken: string
): Promise<TRefreshTokenResponse> {
  const response = await fetch(`${baseURL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error(`Refresh token failed: ${response.status}`);
  }

  return await response.json();
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ECookie.ACCESS_TOKEN)?.value;
  const refreshToken = cookieStore.get(ECookie.REFRESH_TOKEN)?.value;
  const currentPath = request.nextUrl.pathname;

  const isAuthRoute = authRoutes.includes(currentPath);
  const isProtectedRoute = protectedRoutes.includes(currentPath);
  
  /** Nếu không phải auth route và không phải protected route 
   * → Đây là public route → Cho qua luôn, không check token
   */
  if (!isAuthRoute && !isProtectedRoute) {
    return NextResponse.next();
  }

  let hasToken = !!token;
  const hasRefreshToken = !!refreshToken;

  /** Xử lý refresh token */
  if (!hasToken && hasRefreshToken) {
    try {
      const result = await requestRefreshToken(refreshToken);
      if (result.token && result.refreshToken) {
        hasToken = true;
        
        /** Nếu refresh thành công ở auth route → redirect home */
        const response = isAuthRoute 
          ? NextResponse.redirect(new URL(ROUTES.HOME, request.url))
          : NextResponse.next();
        
        response.cookies.set(ECookie.ACCESS_TOKEN, result.token, {
          path: "/",
          expires: result.tokenExpires ? new Date(result.tokenExpires) : undefined,
          secure: true,
          sameSite: "strict",
        });
        
        response.cookies.set(ECookie.REFRESH_TOKEN, result.refreshToken, {
          path: "/",
          expires: result.tokenExpires ? new Date(result.tokenExpires) : undefined,
          secure: true,
          sameSite: "strict",
        });
        
        return response;
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      
      /** Refresh thất bại */
      const response = isAuthRoute 
        ? NextResponse.next() /** Cho vào auth route để login lại */
        : NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url)); /** Protected route thì redirect */
      
      response.cookies.delete(ECookie.REFRESH_TOKEN);
      return response;
    }
  }

  /** Xử lý Auth Routes (sign-in, sign-up, ...) */
  if (isAuthRoute) {
    if (hasToken) {
      /** Đã đăng nhập → redirect về home */
      return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }
    /** Chưa đăng nhập → cho vào */
    return NextResponse.next();
  }

  /** Xử lý Protected Routes (profile, dashboard, ...) */
  if (isProtectedRoute) {
    if (hasToken) {
      /** Đã đăng nhập → cho vào */
      return NextResponse.next();
    }
    /** Chưa đăng nhập → redirect sign-in */
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url));
  }

  /** Default: không bao giờ tới đây */
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
