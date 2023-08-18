import Box from "@/components/Box";
import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import { tokens } from "@/constants";
import Image from "next/image";
import React from "react";
import usMaine from "../../assets/usMaine.jpg";
import dogs from "../../assets/dogs.jpg";
import curvePoint from "../../assets/curvePoint.png";

const Page = () => {
  return (
    <section className="relative flex w-full justify-center bg-seawater px-6 pb-40">
      <div className="relative flex w-full max-w-constraint flex-col items-center pb-20">
        <PageTitle
          titleClass="translate-x-[56px] fill-pale stroke-seaweed"
          x={98}
          y={-8}
          starFill={tokens.colors.seaweed}
          shadowColor={tokens.boxShadowColors.seaweedShadow}
        >
          ABOUT
        </PageTitle>
        <Box boxClass="p-12 pt-8 border-seaweed mt-16 shadow-seawaterShadow bg-pale">
          <Heading as="h2" className="mb-4 text-xl font-bold text-seaweed">
            Passion Drives us, Creativity Defines us
          </Heading>
          <Text className="text-seaweed">
            Some Fun Studio is a family-owned boutique design and development
            studio established in 2021 by none other than us—Alissa Monterusso
            and Matthew Duffy. Hailing from the heart of the Midwest, we&#39;ve
            found our creative home amidst the breathtaking landscapes of
            Seattle, Washington.
          </Text>
        </Box>
        <Image
          width={1206}
          height={905}
          src={usMaine}
          alt="Alissa and Matt at a restaurant table outdoors with their dog Koia in a carrier bag"
          className="border-common shadow-seawaterShadow z-[2] mt-8 h-auto w-[55%] origin-top-left rotate-[4deg] self-end rounded-[30px] border-seaweed shadow-box"
        />
        <div className="z-[1] flex items-end justify-between">
          <Image
            width={1264}
            height={950}
            src={dogs}
            alt="Koia the Morkie and Taffy the Brussels laying in bed looking cute"
            className="border-common h-auto w-[55%] shrink-0 origin-top-left rotate-[-6deg] rounded-[30px] border-seaweed shadow-box shadow-seaweedShadow"
          />
          <Image
            width={359}
            height={317}
            src={curvePoint}
            alt=""
            className="absolute bottom-[40px] right-[190px]"
          />
          <Box boxClass="border-seaweed py-4 text-seaweed bg-pale translate-y-[-100px] shadow-seawaterShadow">
            <Text className="w-[300px] text-center">
              Our biggest source of motivation
            </Text>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Page;
