import { faker } from "@faker-js/faker";

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
// 2.8.411.9 ; 8.0.1720.11

export function generateData() {
  // console.log(faker.number.int({ min: 2, max: 5 }))
  // console.log(faker.system.semver())
  // console.log(faker.word.words(5))
}

export function genDetectedComputer() {
  const comps = [];
  const scanDate = faker.date.recent()
  compNames.forEach((compName) => {
    progNames.forEach((progName, i) => {
      comps.push({
        name: compName,
        swName: progName,
        swVersion: i? '2.8.411.9' : '8.0.1720.11',
        scanDate: scanDate,
      });
    });
  });

  console.log(comps);
}
