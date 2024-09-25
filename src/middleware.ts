// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ["/order", "/role", "/user", "/add-menu"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get("session")?.value;

  console.log("Cookie", cookie);
  const session = await decrypt(cookie);
  console.log("session", session);

  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.id) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.id &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (
    session?.id &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    if (
      session?.role === "Owner" && ["/books", "/owners"].includes(path) ||
      session?.role === "Admin" && ["/book-upload"].includes(path)
    )
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
