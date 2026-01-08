import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  const url = request.nextUrl;
  const searchParams = Object.fromEntries(url.searchParams);

  // Log everything
  if (Object.keys(searchParams).length > 0) {
    console.log("[UTM Middleware]", url.pathname, searchParams);
  }

  // Save all query params as cookies
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      response.cookies.set(key, value, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        sameSite: "lax",
      });
    }
  });

  return response;
}

export const config = {
  matcher: ["/:path*"], // runs on all routes
};