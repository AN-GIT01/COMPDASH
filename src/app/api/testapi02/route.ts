import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  const date = await prisma.scanDate.create({
    data: { comment: "it is valuable comment" },
  });
  console.log(date);

  const dates = await prisma.scanDate.findMany();

  return NextResponse.json({ dates });
}
