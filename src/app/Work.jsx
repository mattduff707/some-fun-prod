import Box from "@/components/Box";
import Title from "../components/Title";
import React from "react";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Link from "next/link";
import Image from "next/image";
import { projectData } from "@/constants";
import ProjectLink from "@/components/ProjectLink";

const Work = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-dijon px-section pb-pageBottom pt-pageTop max600:px-sectionMobile max600:pb-pageBottomMobile max600:pt-pageTopMobile">
      <div className="flex w-full max-w-constraint flex-col max1000:items-center">
        <Title
          boxClass="border-darkDijon bg-pale shadow-pinkyShadow"
          titleClass="fill-darkDijon translate-x-[60px] stroke-pale"
        >
          WORK
        </Title>
        <Box
          withPadding
          boxClass="p-12 pt-8 border-darkDijon mt-16 shadow-dijonShadow bg-pale"
        >
          <Heading as="h2" className="mb-4 text-xl font-bold text-darkDijon">
            Elevating Ideas, Crafting Experiences.
          </Heading>
          <Text className="text-seaweed">
            Collaborating with visionary clients, we turn ideas into remarkable
            digital realities through our website design and development
            prowess.
          </Text>
        </Box>
        <div className="mx-auto mt-16 flex w-full flex-wrap gap-6 max500:justify-center max500:gap-8">
          {projectData.map((project) => (
            <ProjectLink project={project} key={project.title} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 h-[76px] w-full bg-seawater"></div>
      <div
        alt=""
        className="absolute bottom-[4px] inline-block h-[136px] w-[1920px] bg-dijonSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Work;
