import { NextResponse, NextRequest } from "next/server";
import { genLicensedComputers, genLicensedComputers2 } from "../../../utils/generateData";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  let $res = genLicensedComputers2()
  console.log(`returned result: "${$res}"`)

  return NextResponse.json($res);
}
