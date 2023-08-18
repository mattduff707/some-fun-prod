import Box from "../components/Box";
import BoxBtn from "..//components/BoxBtn";
import Image from "next/image";
import React from "react";
import alissaPic from "../assets/alissaPic.png";
import mattPic from "../assets/mattPic.png";
import Highlight from "../components/Highlight";
import Star from "../components/Star";
import Text from "@/components/Text";
import Heading from "@/components/Heading";

const General = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-seaweed px-section pb-pageBottom pt-pageTop max600:px-sectionMobile max600:pb-pageBottomMobile max600:pt-pageTopMobile">
      <div className="isolate flex w-full max-w-constraint flex-col items-start max1000:items-center">
        <Box
          boxClass={
            "shadow-seaweedShadow border-seawater bg-pale pt-10 px-12 pb-14 relative z-10 max1000:mb-20 max600:mb-16 z-[1]"
          }
        >
          <Heading as={"h2"} className="text-xl font-bold text-burntDark">
            Howdy and Welcome!
          </Heading>
          <Text className="max-w-[425px] pt-4 text-lg text-seaweed">
            Some Fun Studio is a distinguished boutique creative studio
            dedicated to catering to the design and programming needs of small
            businesses and startups in various industries.
          </Text>
          <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
            <BoxBtn
              buttonClass={
                "border-4 border-seawater px-12 py-3 font-semibold text-seaweed bg-pale whitespace-nowrap max600:text-sm"
              }
              shadowClass={"bg-seawater"}
            >
              START A PROJECT
            </BoxBtn>
          </div>
        </Box>
        <div className="isolate z-[2] flex w-full justify-center max1000:flex-col max1000:items-center">
          <div className="relative translate-x-[16px] translate-y-[140px] max1000:z-[20] max1000:translate-y-[64px] max600:translate-y-[48px]">
            <div className="absolute bottom-[-40px] left-[-60px] z-10 max1000:bottom-[-48px] max600:left-[-48px]">
              <div className="relative">
                <p className="absolute left-[50%] top-[50%] z-30 translate-x-[-50%] translate-y-[-50%] rotate-[-12deg] text-center font-marshland text-[0.85rem] text-burntDark max600:text-[0.7rem]">
                  THE
                  <br /> DESIGNER
                </p>
                <Star
                  className={
                    "h-[180px] w-[180px] max600:h-[140px] max600:w-[140px]"
                  }
                />
              </div>
            </div>
            <Image
              src={alissaPic}
              alt="Alissa holding a paint up when she was a child"
              className="h-auto w-[420px] origin-bottom-left rotate-[-10deg] rounded-[30px] border-[15px] border-pale shadow-box shadow-seaweedShadow max600:w-[300px] max600:border-8"
            />
          </div>
          <div className="relative z-20 translate-y-[-120px] max1000:z-[19] max1000:translate-y-0">
            <div className="absolute right-[-60px] top-[-20px] z-10">
              <div className="relative">
                <p className="absolute left-[50%] top-[50%] z-30 translate-x-[-50%] translate-y-[-50%] rotate-[11deg] text-center font-marshland text-[0.80rem] text-burntDark max600:text-[0.65rem]">
                  THE
                  <br /> DEVELOPER
                </p>
                <Star
                  className={
                    "h-[180px] w-[180px] max600:h-[140px] max600:w-[140px]"
                  }
                />
              </div>
            </div>
            <Image
              src={mattPic}
              alt="Matt on a computer playing a game when he was a child"
              className="h-auto w-[420px] origin-top-left rotate-[9deg] rounded-[30px] border-[15px] border-pale shadow-box shadow-seaweedShadow max600:w-[300px] max600:border-8"
            />
          </div>
        </div>
        <Box
          boxClass={
            "shadow-seaweedShadow border-seawater bg-pale py-12 px-12 relative self-end max1000:self-center max1000:mt-32 max600:mt-20"
          }
        >
          <Text className="max-w-[425px] text-seaweed">
            We are <Highlight>creative</Highlight>,{" "}
            <Highlight>curious</Highlight>, and <Highlight>holistic</Highlight>{" "}
            in our thinking. We embrace the process. Every new project is an
            opportunity to <Highlight>learn</Highlight>,{" "}
            <Highlight>explore</Highlight>, and <Highlight>grow</Highlight>.
          </Text>
        </Box>
      </div>
      <div className="absolute bottom-0 h-[82px] w-full bg-fluff"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block h-[142px] w-[1920px] bg-greenSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default General;
