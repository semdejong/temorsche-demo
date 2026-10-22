import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * /Contact → /contact. Dit pad staat niet in next.config.ts: die redirects
 * negeren hoofdletters, waardoor /contact naar zichzelf zou blijven sturen.
 */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/Contact" || path === "/Contact/") {
    return NextResponse.redirect(new URL("/contact", request.url), 307);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Contact", "/Contact/"],
};
