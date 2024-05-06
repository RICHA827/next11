
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  let {name, age, email} = await req.json();
  console.log(name, age, email);
            
  if(!name || !age || !email) {
          return NextResponse.json(
      { error: "required filled not here", ok: false },
    {status: 400});
  } 
  return NextResponse.json({
    res: "Credentials verifid",
    ok: true,
  },{status: 201})
  

  }
