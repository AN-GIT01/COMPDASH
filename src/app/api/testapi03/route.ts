import { NextResponse, NextRequest } from "next/server";
import { genDetectedComputer } from "../../../utils/generateData";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  let count = request.nextUrl.searchParams.get("count");
  if (count === null || ~~count < 1 || ~~count > 5) {
    count = "3";
  }
  let dates = genDetectedComputer(~~count)

  return NextResponse.json({ dates });
}
