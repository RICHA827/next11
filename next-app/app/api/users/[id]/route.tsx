
import { NextResponse } from "next/server";

export function GET (_ : any, response: any){     // _=we are ignoring request
     const {id} = response.params;

    return NextResponse.json({ id })

}