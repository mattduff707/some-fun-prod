"use client";
import React from "react";
import NavItem from "./NavItem";
import { tokens } from "@/constants";
import Menu from "@/components/icons/Menu";
import Rainbow from "@/components/Rainbow";
import Image from "next/image";
import logoHeader from "../assets/somefunLogoHeader.png";
const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setMenuOpen(true)}
        className="hidden max1200:block"
      >
        <Menu className="h-[40px] w-[40px] max600:h-[36px] max600:w-[36px]" />
      </button>
      <div
        style={{
          left: menuOpen ? "0" : "-100%",
          opacity: menuOpen ? "1" : "0",
        }}
        className="fixed top-0 z-[2] h-full w-full overflow-hidden bg-landingBg bg-landing transition-opacity duration-300 min1200:hidden"
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <Image
            className="h-auto w-[164px]"
            src={logoHeader}
            alt="some fun logo"
          />
          <ul className="flex flex-col items-center gap-4 text-lg font-medium text-seaweed">
            <NavItem
              onClick={() => setMenuOpen(false)}
              pathClass="stroke-seawater"
              text="HOME"
              path="/"
              exact
              activeColor={tokens.colors.seawater}
            />
            <NavItem
              onClick={() => setMenuOpen(false)}
              pathClass="stroke-burntDark navItemServices"
              text="SERVICES"
              path="/services"
              activeColor={tokens.colors.burntDark}
            />
            <NavItem
              onClick={() => setMenuOpen(false)}
              pathClass="stroke-darkDijon"
              text="WORK"
              path="/work"
              activeColor={tokens.colors.darkDijon}
            />
            <NavItem
              onClick={() => setMenuOpen(false)}
              pathClass="stroke-seaweed"
              text="ABOUT"
              path="/about"
              activeColor={tokens.colors.seaweed}
            />
          </ul>
          <Rainbow className="absolute left-[10%] top-[10%] h-[80px] w-[600px] translate-x-[-50%] -rotate-45 max700:left-[6%] max700:top-[6%] max700:h-[60px]" />
          <Rainbow className="absolute right-[10%] top-[10%] h-[80px] w-[600px] translate-x-[50%] rotate-45 max700:right-[6%] max700:top-[6%] max700:h-[60px]" />
          <Rainbow className="absolute bottom-[10%] left-[10%] h-[80px] w-[600px] translate-x-[-50%] rotate-[225deg] max700:bottom-[6%] max700:left-[6%] max700:h-[60px]" />
          <Rainbow className="absolute bottom-[10%] right-[10%] h-[80px] w-[600px] translate-x-[50%] -rotate-[225deg] max700:bottom-[6%] max700:right-[6%] max700:h-[60px]" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
