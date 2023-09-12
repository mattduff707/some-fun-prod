import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Carousel from "../components/Carousel";
import Footer from "./Footer.jsx";
import Header from "./Header";

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
            animation={"motion-safe:animate-slowSlideHeader"}
          />
        </Link>
        <Header />
        <main className="flex justify-center bg-pale">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
