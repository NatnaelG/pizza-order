import "server-only";
import { SignJWT, jwtVerify } from "jose";
// import { SessionPayload } from '@/app/lib/definitions'

import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: {
  id: string;
  status: string;
  role: string;
  isAdmin: boolean;
  expiresAt: Date;
}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as {
      id: string;
      status: string;
      role: string;
      isAdmin: boolean;
      expiresAt: Date;
    };
  } catch (error) {
    console.log("Failed to verify session", error);
  }
}

export async function createSession(id: string, status: string, role: string, isAdmin: boolean) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ id, status, role, isAdmin, expiresAt });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  return await decrypt(session);
}

export async function updateSession() {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("session");
}