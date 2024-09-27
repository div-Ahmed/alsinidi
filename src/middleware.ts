import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isTokenValid, refreshToken } from './lib/auth';
import { unstable_noStore as noStore } from 'next/cache';

export async function middleware(request: NextRequest) {
  noStore();
  
  // Retrieve token from cookies
  const userToken = request.cookies.get('userToken')?.value;
  const requestedPage = request.nextUrl.pathname;

  // If no token is found, redirect to sign-in page
  if (!userToken) {
    const response = NextResponse.redirect(new URL(`/sign-in`, request.url));
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }

  // Check if the token is valid asynchronously
  const isValid = await isTokenValid(userToken);
  if (!isValid) {
    try {
      // Attempt to refresh the token if invalid
      const newToken = await refreshToken(userToken);

      // If token refresh is successful, set the new token and proceed
      if (newToken) {
        const response = NextResponse.next();
        response.cookies.set('userToken', newToken, { path: '/' });
        response.headers.set('Cache-Control', 'no-store');
        return response;
      }
    } catch (error) {
      // If refresh fails, redirect to the sign-in page
      return NextResponse.redirect(new URL(`/sign-in`, request.url));
    }
  }

  // If token is valid, allow access to the requested page
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

// Define the routes that this middleware should apply to
export const config = {
  matcher: ['/profile/:slug*', '/cart/:slug*'],
};
