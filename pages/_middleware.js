import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {

    const url = req.nextUrl.clone()
    url.pathname = '/login'
    //token will exist if the user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET, secureCookie:
        process.env.NEXTAUTH_URL?.startsWith("https://") ??
        !!process.env.VERCEL_URL});

    const { pathname } = req.nextUrl

    // allow the request if the following is true...
        
        // 1) It's a request for next-auth session & provider fetching
        // 2) the token exists
        
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // Redirect them to login if they DO NOT have token AND are requesting a protected route
    
    if (!token && pathname !== url.pathname) {
            return NextResponse.rewrite(url);
    }
}   