import { loginSchema } from "@/utils/schemas";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  try{
    const data = loginSchema.parse(await req.json())
    return NextResponse.json(data)
  }catch(error:any){
    console.log(error)
    return NextResponse.json(error.errors)
  }
}