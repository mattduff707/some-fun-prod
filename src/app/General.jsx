import Box from "@/components/Box";
import BoxBtn from "@/components/BoxBtn";
import Image from "next/image";
import React from "react";
import alissaPic from "../assets/alissaPic.png";
import mattPic from "../assets/mattPic.png";
import Highlight from "@/components/Highlight";
import Star from "@/components/Star";

const General = () => {
  return (
    <section className="bg-seaweed max-w-full overflow-hidden relative flex flex-col items-center pb-[252px] pt-[48px]">
      <div className="max-w-constraint w-full pt-10 flex flex-col items-start isolate">
        <Box
          boxClass={
            "shadow-seaweedShadow border-seaweed bg-pale pt-10 px-12 pb-14 relative z-10"
          }
        >
          <h2 className="text-burntDark font-bold text-xl">
            Howdy and Welcome!
          </h2>
          <p className="text-lg text-seaweed max-w-[425px] pt-4">
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
          <div className="relative translate-y-[140px] translate-x-[16px]">
            <div className="absolute bottom-[-40px] left-[-60px] z-10">
              <div className="relative">
                <p className="font-marshland text-burntDark absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[0.85rem] rotate-[-12deg] text-center">
                  THE
                  <br /> DESIGNER
                </p>
                <Star className={"w-[180px] h-[180px] "} />
              </div>
            </div>
            <Image
              src={alissaPic}
              alt="Alissa holding a paint up when she was a child"
              className="border-[15px] border-pale rounded-[30px] w-[420px] h-auto shadow-seaweedShadow shadow-box origin-bottom-left rotate-[-10deg]"
            />
          </div>
          <div className="relative translate-y-[-120px] z-20">
            <div className="absolute top-[-20px] right-[-60px] z-10">
              <div className="relative">
                <p className="font-marshland text-burntDark absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[0.80rem] rotate-[11deg] text-center">
                  THE
                  <br /> DEVELOPER
                </p>
                <Star className={"w-[180px] h-[180px] "} />
              </div>
            </div>
            <Image
              src={mattPic}
              alt="Matt on a computer playing a game when he was a child"
              className="border-[15px] border-pale rounded-[30px] w-[420px] h-auto shadow-seaweedShadow shadow-box origin-top-left rotate-[9deg]"
            />
          </div>
        </div>
        <Box
          boxClass={
            "shadow-seaweedShadow border-seaweed bg-pale py-[60px] px-12 relative self-end"
          }
        >
          <p className="text-lg text-seaweed max-w-[425px] pt-4">
            We are <Highlight>creative</Highlight>,{" "}
            <Highlight>curious</Highlight>, and <Highlight>holistic</Highlight>{" "}
            in our thinking. We embrace the process. Every new project is an
            opportunity to <Highlight>learn</Highlight>,{" "}
            <Highlight>explore</Highlight>, and <Highlight>grow</Highlight>.
          </p>
        </Box>
      </div>
      <div className="w-full h-[82px] bg-pinky absolute bottom-0"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block w-[1920px] h-[142px] bg-greenSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default General;
