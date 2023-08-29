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
import SimpleStar from "@/components/icons/simpleStar.jsx";
import Squiggle from "@/components/icons/Squiggle.jsx";

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
            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="translate-y-[-2px] text-lg font-black  text-seaweed">
                <FancyText
                  text={"DESIGNING"}
                  letterClass={"text-xxxl translate-y-[2px]"}
                />
              </p>
            </Box>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image src={buildIcon} alt="" width={217} height={159} />

            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="translate-y-[-2px] text-lg font-black  text-seaweed">
                <FancyText text={"BUILDING"} letterClass={"text-xxxl"} />
              </p>
            </Box>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image src={brandingIcon} alt="" width={195} height={196} />
            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-1 px-8">
              <p className="translate-y-[-2px] text-lg font-black  text-seaweed">
                <FancyText text={"BRANDING"} letterClass={"text-xxxl"} />
              </p>
            </Box>
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
                "border-4 border-burntDark px-12 py-3 font-semibold text-seaweed bg-pale whitespace-nowrap group-hover:bg-burntDark group-hover:text-pale"
              }
            >
              CONTACT US!
            </BoxBtn>
          </div>
        </Box>
        <div className="mt-[100px] flex w-full items-center justify-around max600:flex-col">
          <Squiggle className="max-w-[280px] rotate-180 fill-pale" />
          <div className="mb-1 w-[340px] shrink-0 px-4 max900:w-[320px] max600:mt-4">
            <TitleText titleClass="fill-pale stroke-burnt stroke-2 translate-x-[-76px] translate-y-[-20px] text-[64px]">
              OUR PROCESS
            </TitleText>
          </div>

          <Squiggle className="max-w-[280px] rotate-180 fill-pale" />
        </div>
        <div className="max flex w-full items-center justify-center gap-6 px-3 pt-[40px] max1000:flex-wrap max1000:gap-8 max700:flex-col max700:gap-6">
          <div className="flex items-center justify-center gap-6 pb-[52px] max1000:max-w-[600px] max1000:px-[35px] max700:max-w-[140px] max700:flex-col max700:gap-8 max700:px-0 max700:pb-0">
            <div className="relative">
              <Image src={infoProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Gather
                <br /> Information
              </Text>
            </div>
            <Arrow className="h-auto shrink-0 max700:w-[32px] max700:rotate-90" />
            <div className="relative">
              <Image src={planningProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Planning +
                <br /> Wireframing
              </Text>
            </div>
            <Arrow className="h-auto shrink-0 max700:w-[32px] max700:rotate-90" />
            <div className="relative">
              <Image src={designProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Graphics + <br /> UI Design
              </Text>
            </div>
            <Arrow className="h-auto shrink-0 max700:w-[32px] max700:rotate-90" />
            <div className="relative">
              <Image src={buildProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Architect + <br /> Build
              </Text>
            </div>
            <Arrow
              className={
                "h-auto shrink-0 max1000:hidden max700:block max700:w-[32px] max700:rotate-90 "
              }
            />
          </div>
          <div className="flex items-center justify-center gap-6 pb-[52px] max1000:max-w-[600px] max1000:px-[112px] max700:w-full max700:max-w-[140px] max700:flex-col max700:gap-8 max700:px-0 max700:pb-0 ">
            <div className="relative">
              <Image src={testingProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Testing +<br /> QA
              </Text>
            </div>
            <Arrow className="h-auto shrink-0 max700:w-[32px] max700:rotate-90" />
            <div className="relative">
              <Image src={launchProcess} alt="" />
              <Text className="bottom-[calc(-50% - 8px)] absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Delivery + <br /> Launch
              </Text>
            </div>
            <Arrow className="h-auto shrink-0 max700:w-[32px] max700:rotate-90" />
            <div className="relative">
              <Image src={maintainProcess} alt="" />
              <Text className="absolute bottom-[calc(-85%)] left-[50%] translate-x-[-50%] whitespace-nowrap text-center text-base text-seaweed max700:static max700:translate-x-0 max600:text-lg">
                Maintenance + <br /> Support
              </Text>
            </div>
          </div>
        </div>
        <div className="my-[60px] flex w-full items-center justify-center gap-1">
          <SimpleStar className="fill-burnt" />
          <p className="translate-y-[-1px] text-lg text-seaweed">
            or anywhere in-between!
          </p>
          <SimpleStar className="fill-burnt" />
        </div>
        <Box withPadding boxClass=" border-burnt shadow-fluffShadow bg-pale">
          <Heading as="h2" className="mb-4 text-xl font-bold text-burntDark">
            Together we&#39;ll create something amazing.
          </Heading>
          <Text className="text-seaweed">
            At Some Fun Studio, we&#39;re all ears for your exciting new
            ventures. Share your journey, aspirations, and project ambitions
            with us. Once we&#39;ve delved into your world, we provide
            complimentary estimates based on the insights you&#39;ve shared and
            the unique challenges of the project.
            <br />
            <br /> As we embark on this journey together, our quest for
            knowledge continues. We delve into your business&#39;s roots, its
            dreams, and its destined path. This understanding fuels our
            strategic approach to achieve your aspirations.
            <br />
            <br /> Throughout our collaboration, we maintain a steady stream of
            communication, exchanging thoughts and soaking in your feedback. We
            believe in the power of teamwork—after all, you&#39;re the author of
            your story, and we&#39;re the artists helping you bring it to life.
            <br />
            <br /> Guiding the entire process, from conception, to refining, to
            final production, is our specialty. And even after the curtains rise
            or the ink dries, our involvement remains, keeping your story&#39;s
            success our top priority.
          </Text>
        </Box>
      </div>
    </PageWrap>
  );
};

export default Services;
