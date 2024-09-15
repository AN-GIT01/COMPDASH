import { NextResponse, NextRequest } from "next/server";
import { genLicensedComputers } from "../../../utils/generateData";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  let $res = genLicensedComputers()
  console.log(`returned result: "${$res}"`)

  return NextResponse.json($res);
}
