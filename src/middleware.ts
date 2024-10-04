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

const protectedRoutes = ["/order", "/role", "/user", "/add-menu"];
const publicRoutes = ["/login", "/register", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;

  // console.log("Cookie", cookie);
  const session = await decrypt(cookie);
  // console.log("session", session);

  if (isProtectedRoute && !session?.id) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (!session?.id && req.nextUrl.pathname.startsWith("/order-item")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }


  if (
    isPublicRoute &&
    session?.id &&
    req.nextUrl.pathname !== "/"
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }


  // if (
  //   session?.id &&
  //     // session?.restaurantId === "" && ["/order", "/role", "/user", "/add-menu"].includes(path)
  //     req.nextUrl.pathname.startsWith("/order-item")
  // ) {
  //   // if (
  //   //   session?.role === "Owner" && ["/books", "/owners"].includes(path) ||
  //   //   session?.role === "Admin" && ["/book-upload"].includes(path)
  //   // )
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }

  if (
    session?.id &&
      session?.restaurantId === "" && ["/order", "/role", "/user", "/add-menu"].includes(path)
      // !req.nextUrl.pathname.startsWith("/")
  ) {
    // if (
    //   session?.role === "Owner" && ["/books", "/owners"].includes(path) ||
    //   session?.role === "Admin" && ["/book-upload"].includes(path)
    // )
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
