import Box from "../components/Box";
import BoxBtn from "..//components/BoxBtn";
import Image from "next/image";
import React from "react";
import alissaPic from "../assets/alissaPic.png";
import mattPic from "../assets/mattPic.png";
import Highlight from "../components/Highlight";
import Star from "../components/Star";
import Title from "../components/Title";
import usPic from "../assets/us.jpg";
import Smiley from "@/components/icons/Smiley";

const About = () => {
  return (
    <section className="px-section relative flex max-w-full flex-col items-center overflow-hidden bg-seawater bg-cover pt-8">
      <div className="flex w-full flex-col items-center bg-squiggleBg bg-cover pb-[240px]">
        <div className="w-full max-w-constraint pt-pageTop">
          <Title
            boxClass="border-seaweed bg-pale shadow-pinkyShadow shadow-seaweedShadow mb-16"
            titleClass={"fill-seaweed translate-x-[24px] translate-y-[4px]"}
          >
            THE TEAM
          </Title>
          <div className="flex  items-center">
            <Image
              className="h-auto w-[50%] origin-top-right translate-y-12 rotate-[-7deg] rounded-[60px] border-[15px] border-seaweed shadow-box shadow-seaweedShadow"
              width={1001}
              height={1291}
              src={usPic}
              alt="Alissa and Matt in tropical shirts arm in arm by the Puget"
            />
            <Box
              boxClass={
                "shadow-seaweedShadow border-seaweed bg-pale pt-10 px-12 pb-14 relative z-10 w-[50%]"
              }
            >
              <p className="max-w-[425px] pt-4 text-lg text-seaweed">
                Hi! We&#39;re Alissa & Matt, the tiny team behind the screens!
              </p>
              <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
                <BoxBtn
                  buttonClass={
                    "border-4 border-seaweed px-12 py-3 font-semibold text-seaweed bg-pale flex items-center justify-center gap-2 whitespace-nowrap"
                  }
                  shadowClass={"bg-burnt"}
                >
                  SEE MORE ABOUT US <Smiley className={"shrink-0"} />
                </BoxBtn>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
