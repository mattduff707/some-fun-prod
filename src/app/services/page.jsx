import React from "react";
import TitleText from "../../components/TitleText.jsx";
import Box from "../../components/Box.jsx";
import Image from "next/image";
import designIcon from "../../assets/designIcon.png";
import buildIcon from "../../assets/buildIcon.png";
import brandingIcon from "../../assets/brandingIcon.png";
import FancyText from "../../components/FancyText.jsx";
import BoxBtn from "../../components/BoxBtn.jsx";
import PageTitle from "@/components/PageTitle.jsx";
import Heading from "@/components/Heading.jsx";
import Text from "@/components/Text.jsx";
import { tokens } from "@/constants.js";
import PageWrap from "@/components/PageWrap.jsx";
import buildProcess from "@/assets/buildProcess.png";
import designProcess from "@/assets/designProcess.png";
import infoProcess from "@/assets/infoProcess.png";
import launchProcess from "@/assets/launchProcess.png";
import maintainProcess from "@/assets/maintainProcess.png";
import planningProcess from "@/assets/planningProcess.png";
import testingProcess from "@/assets/testingProcess.png";
import Arrow from "@/components/icons/Arrow.jsx";

const Services = () => {
  return (
    <PageWrap className="bg-pinky">
      <div className="flex w-full max-w-constraint flex-col items-center">
        <PageTitle
          titleClass="translate-x-[32px] fill-pale stroke-burnt"
          shadowColor={tokens.boxShadowColors.pinkyShadow}
          x={70}
          y={-8}
          starFill={tokens.colors.burnt}
        >
          SERVICES
        </PageTitle>

        <Box
          withPadding
          boxClass=" border-burnt mt-16 shadow-fluffShadow bg-pale"
        >
          <Heading as="h2" className="mb-4 text-xl font-bold text-burntDark">
            Let&#39;s bring your vision to life!
          </Heading>
          <Text className="text-seaweed">
            We offer a comprehensive suite of services to elevate your business,
            including expert website design and development, brand identity
            development, illustrations, as well as creating distinctive logos.
            Our diverse clientele spans both small businesses and large
            enterprises. Whether you require ongoing design and development
            support or are interested in one-off projects, we&#39;re here to
            meet your unique needs. Learn more about our process here!
          </Text>
        </Box>
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-12 px-12 min900:flex-row min900:items-end min900:gap-0 ">
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
        <Box
          withPadding
          boxClass="border-burnt mt-16 shadow-fluffShadow bg-pale relative max600:pb-10"
        >
          <Text className="text-seaweed">
            Give us a shout and let&#39;s brainstorm together! We&#39;re excited
            to lend our creative touch to your next big project.
          </Text>
          <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
            <BoxBtn
              buttonClass={
                "border-4 border-burntDark px-12 py-3 font-semibold text-seaweed bg-pale whitespace-nowrap"
              }
              shadowClass={"bg-burnt"}
            >
              CONTACT US!
            </BoxBtn>
          </div>
        </Box>
        <div className="flex w-full items-center justify-center gap-6 pt-[100px]">
          <div className="relative">
            <Image src={infoProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] text-center text-base text-seaweed">
              Gather
              <br /> Information
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={planningProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] text-center text-base text-seaweed">
              Planning +
              <br /> Wireframing
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={designProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed">
              Graphics + <br /> UI Design
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={buildProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed">
              Architect + <br /> Build
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={testingProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] text-center text-base text-seaweed">
              Testing
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={launchProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed">
              Delivery + <br /> Launch
            </Text>
          </div>
          <Arrow />
          <div className="relative">
            <Image src={maintainProcess} alt="" />
            <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed">
              Maintenance + <br /> Support
            </Text>
          </div>
        </div>
      </div>
    </PageWrap>
  );
};

export default Services;
