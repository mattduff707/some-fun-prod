import React from "react";
import Box from "../components/Box";
import ProjectLink from "../components/ProjectLink";
import Text from "../components/Text";
import Title from "../components/Title";
import { projectData } from "../constants";

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
          boxClass=" border-darkDijon mt-16 shadow-dijonShadow bg-pale"
        >
          <Text className="text-seaweed">
            Whether it&#39;s website development, mobile app design or branding,
            we strive to create engaging and innovative products that capture
            the essence of each business we work with.
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
        className="absolute bottom-[-1px] inline-block h-[140px] w-[1920px] bg-dijonSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Work;
