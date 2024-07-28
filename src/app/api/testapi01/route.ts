import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get("param1"));
  console.log(request.nextUrl.searchParams);
  request.nextUrl.searchParams.forEach((val, key) => {
    console.log(key, ':  ', val);    
  });

  return NextResponse.json({ message: "Hello World from testapi01" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...

  return NextResponse.json({ message: "Hello World from testapi01" });
}
