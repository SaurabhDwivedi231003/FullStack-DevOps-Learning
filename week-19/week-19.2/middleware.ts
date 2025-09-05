import {NextResponse} from 'next/server'
import type {NextRequest}
from 'next/server'

// let requestCount = 0; export function middleware(request: NextRequest) {
// requestCount++;   console.log("number of requests is " + requestCount);
// return  NextResponse.next() }

export function middleware(request : NextRequest) {
    console.log(request.nextUrl.pathname);
    if (request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    else if(request.nextUrl.pathname.startsWith('/dashboard')) {
        
        return NextResponse.next()
    }

}

// if we want only specific paths to be matched by the middleware, else
// middleware will run for all the oaths frontend and backend See "Matching
// Paths" below to learn more

// export const config = {
//     matcher: '/api/:path*'
// }

// but this will not allow you to do much filtering as it will run for all the
// api routes. You can use the request object to filter out more specifically.

// The only way for more filtering is : but this is too weird 

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   console.log(request.nextUrl.pathname)
//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     return NextResponse.redirect(new URL('/signin', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.next()
//   }
// }
