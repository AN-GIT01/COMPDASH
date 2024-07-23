import Image from "next/image";
import {genDetectedComputer} from "../utils/generateData"

export default function Home() {

  genDetectedComputer()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>some text</p>      
    </main>
  );
}
