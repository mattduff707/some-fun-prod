import Box from "../components/Box";
import BoxBtn from "..//components/BoxBtn";
import Image from "next/image";
import React from "react";
import alissaPic from "../assets/alissaPic.png";
import mattPic from "../assets/mattPic.png";
import Highlight from "../components/Highlight";
import Star from "../components/Star";

const General = () => {
  return (
    <section className="px-section relative flex max-w-full flex-col items-center overflow-hidden bg-seaweed pb-pageBottom pt-pageTop">
      <div className="isolate flex w-full max-w-constraint flex-col items-start">
        <Box
          boxClass={
            "shadow-seaweedShadow border-seaweed bg-pale pt-10 px-12 pb-14 relative z-10"
          }
        >
          <h2 className="text-xl font-bold text-burntDark">
            Howdy and Welcome!
          </h2>
          <p className="max-w-[425px] pt-4 text-lg text-seaweed">
            Some Fun Studio is a distinguished boutique creative studio
            dedicated to catering to the design and programming needs of small
            businesses and startups in various industries.
          </p>
          <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
            <BoxBtn
              buttonClass={
                "border-4 border-seaweed px-12 py-3 font-semibold text-seaweed bg-pale"
              }
              shadowClass={"bg-burnt"}
            >
              START A PROJECT
            </BoxBtn>
          </div>
        </Box>
        <div className="flex w-full justify-center">
          <div className="relative translate-x-[16px] translate-y-[140px]">
            <div className="absolute bottom-[-40px] left-[-60px] z-10">
              <div className="relative">
                <p className="absolute left-[50%] top-[50%] z-30 translate-x-[-50%] translate-y-[-50%] rotate-[-12deg] text-center font-marshland text-[0.85rem] text-burntDark">
                  THE
                  <br /> DESIGNER
                </p>
                <Star className={"h-[180px] w-[180px] "} />
              </div>
            </div>
            <Image
              src={alissaPic}
              alt="Alissa holding a paint up when she was a child"
              className="h-auto w-[420px] origin-bottom-left rotate-[-10deg] rounded-[30px] border-[15px] border-pale shadow-box shadow-seaweedShadow"
            />
          </div>
          <div className="relative z-20 translate-y-[-120px]">
            <div className="absolute right-[-60px] top-[-20px] z-10">
              <div className="relative">
                <p className="absolute left-[50%] top-[50%] z-30 translate-x-[-50%] translate-y-[-50%] rotate-[11deg] text-center font-marshland text-[0.80rem] text-burntDark">
                  THE
                  <br /> DEVELOPER
                </p>
                <Star className={"h-[180px] w-[180px] "} />
              </div>
            </div>
            <Image
              src={mattPic}
              alt="Matt on a computer playing a game when he was a child"
              className="h-auto w-[420px] origin-top-left rotate-[9deg] rounded-[30px] border-[15px] border-pale shadow-box shadow-seaweedShadow"
            />
          </div>
        </div>
        <Box
          boxClass={
            "shadow-seaweedShadow border-seaweed bg-pale py-[60px] px-12 relative self-end"
          }
        >
          <p className="max-w-[425px] pt-4 text-lg text-seaweed">
            We are <Highlight>creative</Highlight>,{" "}
            <Highlight>curious</Highlight>, and <Highlight>holistic</Highlight>{" "}
            in our thinking. We embrace the process. Every new project is an
            opportunity to <Highlight>learn</Highlight>,{" "}
            <Highlight>explore</Highlight>, and <Highlight>grow</Highlight>.
          </p>
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
