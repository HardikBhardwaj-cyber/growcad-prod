import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host")?.split(":")[0] || "";

  const url = req.nextUrl.clone();

  // 🌐 ROOT → MARKETING
  if (hostname === "growcad.in" || hostname === "www.growcad.in") {
    url.pathname = "/home";
    return NextResponse.rewrite(url);
  }

  // 🚀 APP
  if (hostname === "app.growcad.in") {
    url.pathname = "/dashboard";
    return NextResponse.rewrite(url);
  }

  // 👑 SUPERADMIN
  if (hostname === "superadmin.growcad.in") {
    url.pathname = "/admin";
    return NextResponse.rewrite(url);
  }

  // 🏫 TENANT
  const subdomain = hostname.split(".")[0];

  if (
    subdomain &&
    !["www", "growcad", "app", "superadmin"].includes(subdomain)
  ) {
    url.pathname = `/tenant/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}