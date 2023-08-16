import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";
import Work from "./Work";
import About from "./About";
import HeaderCarousel from "./HeaderCarousel";

export default function Home() {
  return (
    <div className="relative isolate w-full max-w-[1920px] bg-landingBg">
      <Landing />
      <General />
      <Stack />
      <Work />
      <About />
      <HeaderCarousel
        message="LET'S HAVE SOME FUN"
        width={244}
        animation={"animate-slowSlideFooter"}
      />
    </div>
  );
}
