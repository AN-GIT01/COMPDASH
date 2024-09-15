import { faker } from "@faker-js/faker";
import prisma from "@/lib/prisma";
// import "lodash";

const compNames = [
  "BSL-COMP01",
  "SAN-COMP01",
  "SAN-COMP03",
  "SAN-COMP04",
  "FRB-COMP01",
  "FRB-COMP02",
  "FRB-COMP03",
  "FRB-COMP04",
  "FRB-COMP05",
  "SER-COMP01",
  "SER-COMP03",
];

const progNames = ["Java 8 Update", "Java auto updater"];
const progVers = ["2.8.411.9", "8.0.1720.11"];

// для генерации заданного кол-ва уникальных чисел от 1 до заданного max
function myRandomInts(quantity: number, max: number) {
  if (quantity >= max) {
    throw "Bad input values for myRandomInts function";
  }
  const set = new Set<number>();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1);
  }
  const ret: number[] = [];
  set.forEach((value) => {
    ret.push(value);
  });
  return ret;
}

// генерация заданного кол-ва дат из недавнего прошлого
function genScanDates(quantity: number) {
  const set = new Set<Date>();
  while (set.size < quantity) {
    set.add(faker.date.recent({ days: 10 }));
  }
  const dates: Date[] = [];
  set.forEach((value) => {
    dates.push(value);
  });
  return dates;
}

// идея такая: генерируем 3 случайные даты, затем в цикле для каждой даты
// генерируем несколько компьютеров, которые будут исключены из текущей генерации
export function genDetectedComputer(count: number) {
  const dates = genScanDates(count);
  dates.forEach(async (d) => {
    const date = await prisma.scanDate.create({
      data: {
        createdAt: d,
        comment: "",
      },
    });

    const exclude = myRandomInts(2, compNames.length);
    compNames.forEach(async (comp, indx) => {
      if (!exclude.includes(indx)) {
        progNames.forEach(async (progName, i) => {
          const ret = await prisma.detectedComputers.create({
            data: {
              compName: comp,
              swName: progName,
              swVersion: i ? "2.8.411.9" : "8.0.1720.11",
              scanDateId: date.id,
            },
          });
        });
      }
    });
  });

  return dates;
}

// список лицензированных компьютеров один, так что перед генерацией нового списка удаляем старый
export function genLicensedComputers() {
  let $res = 0
  try {
    const clean = async ()=>{
        await prisma.$queryRaw`TRUNCATE TABLE "public"."LicensedComputers1" RESTART IDENTITY CASCADE;`
    }
    clean().catch( ()=>{ $res = 5})

    // clean().then(null, ()=>{
    //     console.log('Failed to clean table');
    //     return 3;
    //   }
  //  )
  } catch (err: any) {
    console.log(err.message);
    $res = 1;
  }

  return $res;
}
