import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  const subdomain = host.split(".")[0];

  // Ignore main domain
  if (subdomain === "www" || subdomain === "growcad") {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  res.headers.set("x-tenant", subdomain);

  return res;
}