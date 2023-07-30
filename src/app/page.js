import LandingSvg from "@/components/LandingSvg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-20 flex items-center justify-center">
      <div className="w-full max-w-constraint">
        <LandingSvg />
      </div>
    </main>
  );
}
