import Box from "@/components/Box";
import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import PageWrap from "@/components/PageWrap";
import ProjectLink from "@/components/ProjectLink";
import Text from "@/components/Text";
import { projectData, tokens } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageWrap className=" bg-dijon">
      <div className="flex w-full max-w-constraint flex-col items-center ">
        <PageTitle
          titleClass="translate-x-[66px] fill-pale stroke-darkDijon"
          x={106}
          y={-8}
          starFill={tokens.colors.darkDijon}
          shadowColor={tokens.boxShadowColors.dijonShadow}
        >
          WORK
        </PageTitle>
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
    </PageWrap>
  );
};

export default Page;
