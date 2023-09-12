import Box from "../../components/Box";
import Heading from "../../components/Heading";
import PageTitle from "../../components/PageTitle";
import Text from "../../components/Text";
import { tokens } from "../..//constants";
import Image from "next/image";
import React from "react";
import usMaine from "../../assets/usMaine.webp";
import dogs from "../../assets/dogs.webp";
import curvePoint from "../../assets/curvePoint.png";
import PageWrap from "../../components/PageWrap";
import SpecialStar from "../../components/SpecialStar";
import Highlight from "../../components/Highlight";
import Heart from "../../components/icons/Heart";

const Page = () => {
  return (
    <PageWrap className="bg-seawater">
      <div className="relative flex w-full max-w-constraint flex-col items-center pb-20">
        <PageTitle
          titleClass="translate-x-[56px] fill-pale stroke-seaweed"
          x={98}
          y={-8}
          starFill={tokens.colors.seaweed}
          shadowColor={tokens.boxShadowColors.seaweedShadow}
          hiddenTitle={"About Some Fun Studio"}
        >
          ABOUT
        </PageTitle>
        <Box
          withPadding
          withHeading
          boxClass="p-12 pt-8 border-seaweed mt-16 shadow-seawaterShadow bg-pale"
        >
          <Heading as="h2" className="mb-4 text-xl font-bold text-seaweed">
            Passion Drives us, Creativity Defines us.
          </Heading>
          <Text className="text-seaweed">
            Some Fun Studio is a family-owned boutique design and development
            studio established in 2021 by none other than us—Alissa Monterusso
            and Matthew Duffy. Hailing from the heart of the Midwest, we&#39;ve
            found our creative home amidst the breathtaking landscapes of
            Seattle, Washington.
          </Text>
        </Box>
        <div className="relative flex justify-between pt-8 max1000:mt-16 max1000:justify-center max500:mt-8">
          <Image
            width={1206}
            height={905}
            src={usMaine}
            alt="Alissa and Matt at a restaurant table outdoors with their dog Koia in a carrier bag"
            className="z-[2] mt-8 h-auto w-[55%] origin-top-left rotate-[4deg] self-end rounded-[30px] border-common border-seaweed shadow-box shadow-seawaterShadow min1000:order-[2] max1000:w-[70%] max1000:origin-center max600:w-[80%] max400:w-[90%]"
          />
          <div className="relative z-[3] grid w-[45%] place-items-center min1000:order-1 max1000:absolute max1000:left-[-24px] max1000:top-[-24px] max500:left-[-12px] max500:top-[-12px] max400:left-[-24px]">
            <SpecialStar
              className="h-auto w-[320px] overflow-visible max1000:w-[240px] max600:w-[180px]"
              fill={tokens.colors.pale}
              shadowColor={tokens.boxShadowColors.seawaterShadow}
            />
            <p className="absolute left-[50%] top-[50%] origin-center translate-x-[-50%] translate-y-[-50%] rotate-[-12deg] whitespace-nowrap text-center text-lg font-bold text-seaweed max1000:text-base max600:text-[.70rem]">
              Your new <br /> business pals!
            </p>
          </div>
        </div>
        <div className="relative z-[1] flex items-end justify-between pb-20 max1000:translate-y-[-20px] max1000:justify-center">
          <Image
            width={1264}
            height={950}
            src={dogs}
            alt="Koia the Morkie and Taffy the Brussels laying in bed looking cute"
            className="h-auto w-[55%] shrink-0 origin-top-left rotate-[-6deg] rounded-[30px] border-common border-seaweed shadow-box shadow-seaweedShadow max1000:w-[70%] max1000:origin-center max600:w-[80%] max400:w-[90%]"
          />
          <Image
            width={359}
            height={317}
            src={curvePoint}
            alt=""
            className="absolute bottom-[40px] right-[190px] max1000:hidden"
          />
          <Box boxClass="border-seaweed py-4 text-seaweed bg-pale translate-y-[-80px] shadow-seawaterShadow max1000:absolute max1000:bottom-[20px] max1000:right-[50%] max1000:translate-x-[50%] max1000:translate-y-0">
            <Text className="min-w-[265px] max-w-[300px] px-4 text-center max1000:text-base">
              Our biggest source of motivation, <br />
              <Highlight className="text-seaweed">Taffy</Highlight> &{" "}
              <Highlight className="text-seaweed">Koia</Highlight>{" "}
              <Heart className="inline-block w-[18px] translate-y-[-2px]" />
            </Text>
          </Box>
        </div>
        <Box
          withHeading
          withPadding
          boxClass=" border-seaweed mt-8 mb-12 shadow-seawaterShadow bg-pale max500:mt-4"
        >
          <Heading as="h2" className="mb-8 text-xl font-bold text-seaweed">
            Alissa: The Creative Visionary
          </Heading>
          <Text className="text-seaweed">
            <span className="font-bold">Hey there, I&#39;m Alissa,</span> the
            creative spark behind Some Fun Studio. Ever since I could hold a
            crayon, I&#39;ve been infatuated with the world of design. From
            sketching my first characters to crafting captivating experiences,
            my journey has been fueled by a passion for aesthetics, problem
            solving, understanding people, and a drive to make an impact.
            <br />
            <br /> <span className="font-bold">A Path Unveiled:</span> I&#39;ve
            always found inspiration in the beauty of everyday life. My
            fascination with colors, shapes, and visual storytelling led me to
            pursue a path in design. Over the years, I&#39;ve honed my skills in
            creating brands that resonate, interfaces that engage, and visuals
            that speak volumes.
            <br />
            <br />
            <span className="font-bold">Design Philosophy:</span> My design
            philosophy is centered on weaving emotions into every pixel.
            It&#39;s not just about making things look good; it&#39;s about
            crafting experiences that connect with people on a profound level.
            Through collaboration and creativity, I&#39;m dedicated to bringing
            your ideas to life in ways that leave a lasting impression.
          </Text>
        </Box>
        <Box
          withPadding
          withHeading
          boxClass=" border-seaweed mt-8 shadow-seawaterShadow bg-pale max500:mt-4"
        >
          <Heading as="h2" className="mb-8 text-xl font-bold text-seaweed">
            Matthew: The Code Magician
          </Heading>
          <Text className="text-seaweed">
            <span className="font-bold">Greetings, I&#39;m Matthew,</span>the
            technical wizard at Some Fun Studio. I have always been captivated
            by the inner workings of technology. Lines of code held a magic of
            their own, and I embarked on a journey to master their language and
            potentials.
            <br />
            <br /> <span className="font-bold">Driven to create:</span> With a
            self-taught background in computer science, I&#39;ve turned my
            passion into purpose. From transforming intricate algorithms into
            efficient software to building seamless online platforms, I&#39;ve
            dedicated my career to breathing life into ideas through code.
            <br />
            <br />
            <span className="font-bold">Coding Ethos:</span> My coding
            methodology is all about finding elegant solutions to complex
            problems. I thrive on innovation, constantly seeking ways to merge
            functionality with finesse. With a commitment to bringing your
            digital dreams to fruition, I&#39;m excited to partner with you in
            the realm of development.
          </Text>
        </Box>
      </div>
    </PageWrap>
  );
};

export default Page;
