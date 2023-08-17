import Box from "../components/Box";
import Title from "../components/Title";
import React from "react";
import SkillStack from "./SkillStack";
import Highlight from "../components/Highlight";
import Text from "@/components/Text";

const Stack = () => {
  return (
    <section className="px-section relative flex max-w-full flex-col items-center overflow-hidden bg-fluff bg-stack bg-cover pb-pageBottom pt-pageTop">
      <div className="flex w-full max-w-constraint flex-col">
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
            "border-burnt shadow-pinkyShadow bg-pale text-seaweed py-[40px] px-[40px]"
          }
        >
          <Text>
            In everything we do, we strive to serve a{" "}
            <Highlight>greater purpose</Highlight>. Whether we’re shaping the
            future of your small business, your non-profit, or your passion
            project, we want to help you make it long-lasting.
          </Text>
        </Box>
      </div>
      <div className="absolute bottom-0 h-[76px] w-full bg-dijon"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block h-[136px] w-[1920px] bg-pinkSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Stack;
