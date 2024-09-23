import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Middleware to protect routes
export async function middleware(req: NextRequest) {
  // Check if the route is protected
  const protectedRoutes = ['/cart', '/checkout', '/profile'];
  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute) {
    // Get session token
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Redirect to sign-in if no token
    if (!token) {
      const signInUrl = new URL('/auth/sign-in', req.url);
      signInUrl.searchParams.set('returnUrl', req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Allow access to non-protected routes or authenticated users
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart/:path*', '/checkout/:path*', '/profile/:path*'],
};
