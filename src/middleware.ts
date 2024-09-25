import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isTokenValid, refreshToken } from './lib/auth';
import { unstable_noStore as noStore } from 'next/cache';
export async function middleware(request: NextRequest) {
  noStore();
    const userToken = request.cookies.get('userToken')?.value;
    const requestedPage = request.nextUrl.pathname;

    // If there's no token, redirect to the sign-in page
    if (!userToken) {
      return NextResponse.redirect(new URL(`/sign-in`, request.url));
      // return NextResponse.redirect(new URL(`/sign-in`, request.url));
    }

    // Check if the token is valid
    if (!isTokenValid(userToken)) {
        try {
            // Try to refresh the token
            const newToken = await refreshToken();
            
            // If token refresh is successful, allow access to the page
            if (newToken) {
                const response = NextResponse.next();
                response.cookies.set('userToken', newToken);
                return response;
            }
        } catch (error) {
            // If refresh fails, redirect to the sign-in page
            return NextResponse.redirect(new URL(`/sign-in`, request.url));
        }
    }

    // If the token is valid, proceed to the requested page
    return NextResponse.next();
}

// Define the routes that this middleware should apply to
export const config = {
    matcher: ['/profile/:slug*', '/cart/:slug*'],
};
