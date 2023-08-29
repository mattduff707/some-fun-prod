import Box from "@/components/Box";
import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import PageWrap from "@/components/PageWrap";
import Text from "@/components/Text";
import { projectData, tokens } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageWrap className=" bg-dijon">
      <div className="flex w-full max-w-constraint flex-col items-center overflow-hidden">
        <PageTitle
          titleClass="translate-x-[66px] fill-pale stroke-darkDijon"
          x={106}
          y={-8}
          starFill={tokens.colors.darkDijon}
          shadowColor={tokens.boxShadowColors.dijonShadow}
        >
          WORK
        </PageTitle>
        <Box boxClass="p-12 pt-8 border-darkDijon mt-16 shadow-dijonShadow bg-pale">
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
            <Link
              key={project.title}
              className="group relative flex w-[calc(33%-14px)] flex-col items-center gap-4 overflow-hidden max900:w-[calc(50%-14px)] max500:w-[80%]"
              href={project.link}
            >
              <div className="relative w-full overflow-hidden rounded-[28px] border-4 border-darkDijon shadow-box shadow-dijonShadow">
                <Image
                  src={project.thumbnail}
                  className=" h-auto w-full "
                  alt=""
                />
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-pale opacity-0 transition-opacity group-hover:opacity-100">
                  <Image src={project.thumbnailHover} alt="" />
                </div>
              </div>
              <h3 className="text-center text-lg text-seaweed">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </PageWrap>
  );
};

export default Page;
