import LandingSvg from "@/components/LandingSvg";
import Image from "next/image";
import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";
import Work from "./Work";

export default function Home() {
  return (
    <main className="bg-landingBg relative isolate w-full max-w-[1920px] shadow-[0px_0px_0px_8px_#CE6f50,0px_0px_10px_10px_hsl(36deg,24%,58%)]">
      <Landing />
      <General />
      <Stack />
      <Work />
    </main>
  );
}
