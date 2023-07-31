import LandingSvg from "@/components/LandingSvg";
import Image from "next/image";
import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";

export default function Home() {
  return (
    <main className="bg-landingBg relative isolate max-w-full">
      <Landing />
      <General />
      <Stack />
    </main>
  );
}
