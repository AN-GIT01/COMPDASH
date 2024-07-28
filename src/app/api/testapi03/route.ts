import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { genScanDates, myRandomInts, compNames, progNames, progVers } from "../../../utils/generateData";

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  let count = request.nextUrl.searchParams.get("count");
  if (count === null || ~~count < 1 || ~~count > 5) {
    count = "3";
  }
  const dates = genScanDates(~~count);
  dates.forEach(async (d) => {
    const date = await prisma.scanDate.create({
      data: {
        createdAt: d,
        comment: "",
      },
    });

    const exclude = myRandomInts(2, compNames.length);
    compNames.forEach(async (comp, indx) => {
        if(!exclude.includes(indx)) {

        progNames.forEach(async (progName, i) => {
            console.log('here')
            const ret = await prisma.detectedComputers.create({
                  data: {
                      compName: comp,
                      swName: progName,
                      swVersion: i? '2.8.411.9' : '8.0.1720.11',
                      scanDateId:  date.id
                  }
                });           
           })
           
        }
    })


  });

  return NextResponse.json({ dates });
}
