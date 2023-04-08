import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // return new Response('Hello, Next.js!')
  return NextResponse.json({message: 'list users'})
}

export async function POST(req: Request){
  const res = await req.json()

  return NextResponse.json({message: 'create users'})
}
