import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";
import Work from "./Work";
import About from "./About";

export default function Home() {
  return (
    <div className="relative isolate w-full max-w-[1920px] bg-landingBg shadow-[0px_0px_0px_8px_#CE6f50,0px_0px_10px_10px_hsl(36deg,24%,58%)]">
      <Landing />
      <General />
      <Stack />
      <Work />
      <About />
    </div>
  );
}
