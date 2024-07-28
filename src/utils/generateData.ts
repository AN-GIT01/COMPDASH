import { faker } from "@faker-js/faker";
// import "lodash";

export const compNames = [
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

export const progNames = ["Java 8 Update", "Java auto updater"];
export const progVers = ["2.8.411.9", "8.0.1720.11"];

// для генерации заданного кол-ва уникальных чисел от 1 до заданного max
export function myRandomInts(quantity: number, max: number) {
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
export function genScanDates(quantity: number) {
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
export function genDetectedComputer() {
  const scanDates = genScanDates(3);
  

  // const comps = [];
  // const scanDate = faker.date.recent({ days: 10 })

  // console.log(scanDate)

  // console.log(genScanDates(3))
  // compNames.forEach((compName) => {
  //   progNames.forEach((progName, i) => {
  //     comps.push({
  //       name: compName,
  //       swName: progName,
  //       swVersion: i? '2.8.411.9' : '8.0.1720.11',
  //       scanDate: scanDate,
  //     });
  //   });
  // });

  // console.log(comps);
}
