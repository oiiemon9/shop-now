import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import authOptions from './app/api/auth/option';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // const loginUrl = new URL('login')
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.url);

    return NextResponse.redirect(loginUrl);
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/shop/:path*', '/add-product', '/products/:path*'],
};
