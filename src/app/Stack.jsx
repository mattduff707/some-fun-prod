import Box from "../components/Box";
import Title from "../components/Title";
import React from "react";
import SkillStack from "./SkillStack";
import Highlight from "../components/Highlight";
import Text from "@/components/Text";

const Stack = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-fluff bg-stack bg-cover px-section pb-pageBottom pt-pageTop max600:pb-pageBottomMobile max600:pt-pageTopMobile">
      <div className="flex w-full max-w-constraint flex-col max1000:items-center">
        <Title boxClass="border-burnt bg-pale shadow-pinkyShadow stroke-pale fill-burnt">
          SKILL STACK
        </Title>
        <div className="flex gap-2 py-20 max1000:flex-col max1000:gap-16">
          <SkillStack
            wrapClass="-rotate-[4deg] origin-center translate-x-[40px] z-30 max1000:translate-x-0  max1000:rotate-0"
            title="BRANDING"
            items={["IDENTITY", "STRATEGY", "MARKETING"]}
          />
          <SkillStack
            wrapClass={
              "-translate-y-[10px] z-20 max1000:translate-x-0  max1000:rotate-0 max1000:translate-y-0"
            }
            title="DESIGNING"
            items={["WEBSITES", "UX/PRODUCT", "GRAPHICS"]}
          />
          <SkillStack
            wrapClass="rotate-[4deg] origin-center -translate-x-[40px] z-10 max1000:translate-x-0 max1000:rotate-0"
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
