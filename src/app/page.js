import LandingSvg from "@/components/LandingSvg";
import Image from "next/image";
import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";

export default function Home() {
  return (
    <main className="bg-landingBg relative isolate w-full max-w-[1920px] shadow-[0px_0px_0px_8px_#CE6f50,0px_0px_8px_8px_#000]">
      <Landing />
      <General />
      <Stack />
    </main>
  );
}
