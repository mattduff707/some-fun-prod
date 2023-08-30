import Landing from "./Landing";
import General from "./General";
import Stack from "./Stack";
import Work from "./Work";
import About from "./About";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="relative isolate w-full max-w-[1920px]  bg-landingBg">
      <div className="animate-fadeIn opacity-0">
        <Landing />
        <General />
        <Stack />
        <Work />
        <About />
        <Carousel
          message="LET'S HAVE SOME FUN"
          width={296}
          animation={"animate-slowSlideFooter"}
          itemClass={"text-lg"}
          wrapClass="py-3"
        />
      </div>
    </div>
  );
}
