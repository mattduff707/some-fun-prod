import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import logoHeader from "../assets/somefunLogoHeader.png";
import logoHeaderSmall from "../assets/logoHeaderSmall.png";
import Insta from "../components/icons/insta";
import Linkedin from "../components/icons/linkedin";
import Carousel from "../components/Carousel";
import NavItem from "./NavItem";
import Footer from "./Footer.jsx";
import { tokens } from "@/constants";
import Menu from "@/components/icons/Menu";
import Link from "next/link";

const kumbh = localFont({
  src: [
    { path: "../../public/fonts/kumbh/KumbhSans-Thin.ttf", weight: "100" },
    {
      path: "../../public/fonts/kumbh/KumbhSans-ExtraLight.ttf",
      weight: "200",
    },
    { path: "../../public/fonts/kumbh/KumbhSans-Light.ttf", weight: "300" },
    { path: "../../public/fonts/kumbh/KumbhSans-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/kumbh/KumbhSans-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/kumbh/KumbhSans-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/kumbh/KumbhSans-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/kumbh/KumbhSans-ExtraBold.ttf", weight: "800" },
    { path: "../../public/fonts/kumbh/KumbhSans-Black.ttf", weight: "900" },
  ],
  variable: "--font-kumbh",
});
const marshland = localFont({
  src: [
    {
      path: "../../public/fonts/marshland/Marshland_Beauty.ttf",
      weight: "400",
    },
  ],
  variable: "--font-marshland",
});
const bavistage = localFont({
  src: [
    {
      path: "../../public/fonts/bavistage/bavistage.otf",
      weight: "400",
    },
  ],
  variable: "--font-bavistage",
});

export const metadata = {
  title: "Some Fun Studio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kumbh.variable} ${marshland.variable} ${bavistage.variable} isolate font-sans`}
      >
        <Link href="/contact">
          <Carousel
            message={"NOW BOOKING PROJECTS FOR 2023"}
            width={366}
            animation={"animate-slowSlideHeader"}
          />
        </Link>
        <header className="sticky top-0 z-40">
          <nav className="relative flex h-[80px] items-center justify-between bg-landingBg bg-landing px-12 max600:h-[60px] max600:px-6">
            <button className="hidden max1200:block">
              <Menu className="h-[36px] w-[36px] max600:h-[32px] max600:w-[32px]" />
            </button>
            <ul className="flex font-medium text-seaweed max1200:hidden">
              <NavItem
                pathClass="stroke-seawater"
                text="HOME"
                path="/"
                exact
                activeColor={tokens.colors.seawater}
              />
              <NavItem
                pathClass="stroke-burntDark navItemServices"
                text="SERVICES"
                path="/services"
                activeColor={tokens.colors.burntDark}
              />
              <NavItem
                pathClass="stroke-darkDijon"
                text="WORK"
                path="/work"
                activeColor={tokens.colors.darkDijon}
              />
              <NavItem
                pathClass="stroke-seaweed"
                text="ABOUT"
                path="/about"
                activeColor={tokens.colors.seaweed}
              />
            </ul>
            <Image
              className="absolute left-[50%] top-[50%] h-auto w-[164px] -translate-x-[50%] -translate-y-[50%] max600:hidden"
              src={logoHeader}
              alt="some fun logo"
            />
            <Image
              className="absolute left-[50%] top-[50%] hidden h-auto w-[50px] -translate-x-[50%] -translate-y-[50%] max600:block"
              src={logoHeaderSmall}
              alt="some fun logo"
            />
            <div className="flex items-center gap-4 max600:gap-2">
              <Linkedin className="max600:h-[22px] max600:w-[22px]" />
              <Insta className="max600:h-[28px] max600:w-[28px]" />
            </div>
          </nav>
        </header>
        <main className="flex justify-center bg-pale">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
