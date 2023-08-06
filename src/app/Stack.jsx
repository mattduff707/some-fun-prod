import Box from "@/components/Box";
import Title from "@/components/Title";
import React from "react";
import SkillStack from "./SkillStack";
import Highlight from "@/components/Highlight";

const Stack = () => {
  return (
    <section className="bg-cover bg-stack bg-fluff max-w-full overflow-hidden relative flex flex-col items-center pt-pageTop pb-pageBottom">
      <div className="max-w-constraint w-full flex flex-col">
        <Title boxClass="border-burnt bg-pale shadow-pinkyShadow">
          SKILL STACK
        </Title>
        <div className="flex gap-2 py-20">
          <SkillStack
            wrapClass="-rotate-[4deg] origin-center translate-x-[40px] z-30"
            title="BRANDING"
            items={["IDENTITY", "STRATEGY", "MARKETING"]}
          />
          <SkillStack
            wrapClass={"-translate-y-[10px] z-20"}
            title="DESIGNING"
            items={["WEBSITES", "UX/PRODUCT", "GRAPHICS"]}
          />
          <SkillStack
            wrapClass="rotate-[4deg] origin-center -translate-x-[40px] z-10"
            title="BUILDING"
            items={["RESPONSIVE WEB", "SYSTEMS", "ECOMMERCE"]}
          />
        </div>
        <Box
          boxClass={
            "border-burnt shadow-pinkyShadow bg-pale text-lg text-seaweed py-[40px] px-[40px]"
          }
        >
          In everything we do, we strive to serve a{" "}
          <Highlight>greater purpose</Highlight>. Whether we’re shaping the
          future of your small business, your non-profit, or your passion
          project, we want to help you make it long-lasting.
        </Box>
      </div>
      <div className="w-full h-[76px] bg-dijon absolute bottom-0"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block w-[1920px] h-[136px] bg-pinkSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Stack;
