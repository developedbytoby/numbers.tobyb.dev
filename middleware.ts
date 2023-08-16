import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.cookies.set("countryCode", req.geo.country || "");
  return res;
}
