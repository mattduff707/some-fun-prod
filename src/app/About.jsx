import Image from "next/image";
import BoxBtn from "..//components/BoxBtn";
import Box from "../components/Box";
import usPic from "../assets/us.jpg";
import Text from "../components/Text";
import Title from "../components/Title";
import Smiley from "../components/icons/Smiley";

const About = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-seawater bg-squiggleBg bg-cover px-section max600:px-sectionMobile">
      <div className="flex w-full flex-col items-center  pb-[240px] max600:pb-[100px]">
        <div className="w-full max-w-constraint pt-pageTop max1000:flex max1000:flex-col max1000:items-center max600:pt-pageTopMobile">
          <Title
            boxClass="border-seaweed bg-pale shadow-pinkyShadow shadow-seaweedShadow mb-16"
            titleClass={
              "fill-seaweed translate-x-[28px] translate-y-[2px] stroke-pale max600:translate-y-0"
            }
          >
            THE TEAM
          </Title>
          <div className="flex items-center max1000:flex-col max1000:gap-16">
            <Image
              className="h-auto w-[50%] origin-top-right translate-y-12 rotate-[-7deg] rounded-[60px] border-[15px] border-seaweed shadow-box shadow-seawaterShadow max1000:w-full max1000:max-w-[480px] max1000:translate-y-0 max1000:rotate-0 max700:border-[12px] max600:max-w-[400px]"
              width={1001}
              height={1291}
              src={usPic}
              alt="Alissa and Matt in tropical shirts arm in arm by the Puget"
            />
            <Box
              boxClass={
                "shadow-seawaterShadow border-seaweed bg-pale relative z-10 w-[50%] max1000:w-full max600:pb-10"
              }
              withPadding
            >
              <Text className="max-w-[425px] pt-4 text-seaweed max1000:max-w-none">
                Hi! We&#39;re Alissa & Matt, the tiny team behind the screens!
              </Text>
              <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
                <BoxBtn
                  buttonClass={
                    "border-4 border-seaweed font-semibold text-seaweed bg-pale flex items-center justify-center gap-2 whitespace-nowrap group-hover:text-pale group-hover:bg-burntDark group-hover:border-burntDark"
                  }
                  link={"/about"}
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
