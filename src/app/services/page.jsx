import React from "react";
import TitleText from "../../components/TitleText.jsx";
import Box from "../../components/Box.jsx";
import Image from "next/image";
import designIcon from "../../assets/designIcon.png";
import buildIcon from "../../assets/buildIcon.png";
import brandingIcon from "../../assets/brandingIcon.png";
import FancyText from "../../components/FancyText.jsx";
import BoxBtn from "../../components/BoxBtn.jsx";

const Services = () => {
  return (
    <section className="relative flex w-full justify-center bg-fluff px-6 pb-40">
      <div className="flex w-full max-w-constraint flex-col items-center">
        <div className="h-[132px] w-[640px] pt-12">
          <TitleText titleClass="translate-x-[32px]">SERVICES</TitleText>
        </div>
        <Box boxClass="p-12 pt-8 border-burnt mt-16 shadow-fluffShadow bg-pale">
          <h2 className="mb-2 text-xl font-bold text-burntDark">
            Let&#39;s bring your vision to life!
          </h2>
          <p className="text-lg text-seaweed">
            We offer a comprehensive suite of services to elevate your business,
            including expert website design and development, brand identity
            development, illustrations, as well as creating distinctive logos.
            Our diverse clientele spans both small businesses and large
            enterprises. Whether you require ongoing design and development
            support or are interested in one-off projects, we&#39;re here to
            meet your unique needs. Learn more about our process here!
          </p>
        </Box>
        <div className="min900:gap-0 min900:items-end min900:flex-row mt-12 flex w-full flex-col items-center justify-between gap-12 px-12 ">
          <div className="flex flex-col items-center gap-6">
            <Image src={designIcon} alt="" width={161} height={189} />
            <BoxBtn
              buttonClass={
                "border-4 border-burntDark px-8 py-1 font-semibold text-seaweed bg-pale text-lg"
              }
              shadowClass={"bg-burnt"}
            >
              <FancyText
                text={"DESIGNING"}
                wordClass={"translate-y-[-2px]"}
                letterClass={"translate-y-[4px] text-xxxl"}
              />
            </BoxBtn>
            {/* <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="text-seaweed text-lg font-black translate-y-[-2px]">
                <FancyText
                  text={"DESIGNING"}
                  letterClass={"translate-y-[4px] text-xxxl"}
                />
              </p>
            </Box> */}
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image src={buildIcon} alt="" width={217} height={159} />
            <BoxBtn
              buttonClass={
                "border-4 border-burntDark px-8 py-1 font-semibold text-seaweed bg-pale text-lg"
              }
              shadowClass={"bg-burnt"}
            >
              <FancyText
                text={"BUILDING"}
                wordClass={"translate-y-[-2px]"}
                letterClass={"text-xxxl"}
              />
            </BoxBtn>
            {/* <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="text-seaweed text-lg font-black translate-y-[-2px]">
                <FancyText text={"BUILDING"} letterClass={"text-xxxl"} />
              </p>
            </Box> */}
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image src={brandingIcon} alt="" width={195} height={196} />
            <BoxBtn
              buttonClass={
                "border-4 border-burntDark px-8 py-1 font-semibold text-seaweed bg-pale text-lg"
              }
              shadowClass={"bg-burnt"}
            >
              <FancyText
                text={"BRANDING"}
                wordClass={"translate-y-[-2px]"}
                letterClass={"text-xxxl"}
              />
            </BoxBtn>
            {/* <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="text-seaweed text-lg font-black  translate-y-[-2px]">
                <FancyText text={"BRANDING"} letterClass={"text-xxxl"} />
              </p>
            </Box> */}
          </div>
        </div>
        <Box boxClass="p-12 border-burnt mt-16 shadow-fluffShadow bg-pale relative">
          <p className="text-lg text-seaweed">
            Give us a shout and let&#39;s brainstorm together! We&#39;re excited
            to lend our creative touch to your next big project.
          </p>
          <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
            <BoxBtn
              buttonClass={
                "border-4 border-burntDark px-12 py-3 font-semibold text-seaweed bg-pale"
              }
              shadowClass={"bg-burnt"}
            >
              START A PROJECT
            </BoxBtn>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Services;
