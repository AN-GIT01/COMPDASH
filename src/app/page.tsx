import Image from "next/image";
import {generateData, genDetectedComputer} from "../utils/generateData"

export default function Home() {
  generateData()
  genDetectedComputer()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>some text</p>      
    </main>
  );
}
