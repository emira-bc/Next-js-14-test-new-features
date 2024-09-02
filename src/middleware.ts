
import type { NextRequest } from 'next/server';
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Hello from middleware!! ========================/--_--\\========================', pathname);
  // return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: ['/', '/product/:slug*', '/productStatic/:slug*'],
}
