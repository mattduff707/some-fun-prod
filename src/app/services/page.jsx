import React from "react";
import TitleText from "../../components/TitleText.jsx";
import Box from "../../components/Box.jsx";
import Image from "next/image";
import designIcon from "../../assets/designIcon.png";
import buildIcon from "../../assets/buildIcon.png";
import brandingIcon from "../../assets/brandingIcon.png";

const Services = () => {
  return (
    <section className="relative bg-fluff w-full flex justify-center pb-40">
      <div className="flex flex-col items-center max-w-constraint w-full">
        <div className="w-[640px] h-[132px] pt-12">
          <TitleText titleClass="translate-x-[32px]">SERVICES</TitleText>
        </div>
        <Box boxClass="p-12 border-burnt mt-16 shadow-fluffShadow bg-pale">
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
        <div className="flex justify-between items-end w-full mt-12 px-12">
          <div className="flex flex-col gap-6 items-center">
            <Image src={designIcon} alt="" width={161} height={189} />
            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-6 px-4">
              DESIGNING
            </Box>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Image src={buildIcon} alt="" width={217} height={159} />
            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-6 px-4">
              BUILDING
            </Box>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Image src={brandingIcon} alt="" width={195} height={196} />
            <Box boxClass="bg-pale border-burnt shadow-fluffShadow py-6 px-4">
              BRANDING
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
