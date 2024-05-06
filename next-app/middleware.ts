import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request : NextRequest ){
    
    //if(request.nextUrl.pathname !== '/homelogin'){
       // return NextResponse.redirect(new URL('/homelogin', request.url))
   // }
    return NextResponse.redirect(new URL('/homelogin',request.url));
}

export const config = {
    matcher: ['/userlists/:path*'] 
};