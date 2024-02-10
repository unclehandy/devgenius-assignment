import { NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export async function middleware(request ) {
    const token = cookies(request.headers).get("token")?.value; // perbaikan di sini
    const secretKey = process.env.SECRET_KEY;
    const secret = new TextEncoder().encode(secretKey);

  

    if (!token) {
        console.log('Redirecting to /');
        return NextResponse.redirect(new URL("/", request.url)); // perbaikan di sini
    }

    try {
        await jose.jwtVerify(token, secret);
        console.log('Token verified successfully');
        return NextResponse.next();
    } catch (error) {
        console.error('Token verification failed:', error);
        console.log('Redirecting to /');
        return NextResponse.redirect(new URL("/", request.url)); // perbaikan di sini
    }
}

export const config = {
    matcher: '/dashboard/:path*',
};
