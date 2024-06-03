import Image from "next/image";
import HeroSec from "./components/HeroSec";
import SecSec from "./components/SecSec";
import ThirdSec from "./components/ThirdSec";
import ForthSec from "./components/ForthSec";
import FifthSec from "./components/FifthSec";
import SixthSec from "./components/SixthSec";
import SeventhSec from "./components/SeventhSec";

export default function Home() {

  return (
    <main className=" borderClass w-full max-w-[1300px] flex  min-h-screen flex-col items-center justify-start mt-[50px]">

      <HeroSec />
      <SecSec />
      <ThirdSec />
      <ForthSec />
      <FifthSec />
      <SixthSec />
      <SeventhSec />

    </main>

  );
}
