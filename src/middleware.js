import { NextResponse } from "next/server";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function middleware(request) {
  const response = NextResponse.next();
  const searchParams = request.nextUrl.searchParams;

  UTM_KEYS.forEach((key) => {
    const value = searchParams.get(key);

    if (value) {
      response.cookies.set(key, value, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
    }
  });

  return response;
}

export const config = {
  matcher: ["/:path*"], // capture UTMs on all pages
};
