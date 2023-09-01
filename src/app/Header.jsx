import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import logoHeader from "../assets/somefunLogoHeader.png";
import logoHeaderSmall from "../assets/logoHeaderSmall.png";
import Linkedin from "../components/icons/linkedin";
import Insta from "../components/icons/insta";
import { tokens } from "../constants";
import MobileMenu from "./MobileMenu";
const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav className="relative flex h-[80px] items-center justify-between bg-landingBg bg-landing px-12 max600:h-[60px] max600:px-6">
        <MobileMenu />
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
          <a
            href="https://www.linkedin.com/company/some-fun-studio"
            target="_blank"
          >
            <Linkedin className="fill-seaweed transition-colors hover:fill-burntDark max600:h-[22px] max600:w-[22px]" />
          </a>
          <a href="https://www.instagram.com/somefunstudio" target="_blank">
            <Insta className="fill-seaweed transition-colors hover:fill-burntDark max600:h-[28px] max600:w-[28px]" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
