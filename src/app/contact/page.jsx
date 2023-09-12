import React from "react";
import Box from "../../components/Box";
import ContactForm from "../../components/ContactForm";
import Heading from "../../components/Heading";
import PageTitle from "../../components/PageTitle";
import PageWrap from "../../components/PageWrap";
import Text from "../../components/Text";
import { tokens } from "../../constants";

export const metadata = {
  title: "Contact Us",
  description: `Ready to Begin? We're excited to learn more about you and your business. A few quick questions will help us get started on crafting the perfect solution.`,
};

const Page = () => {
  return (
    <PageWrap className=" bg-seaweed">
      <div className="flex w-full max-w-constraint flex-col items-center">
        <PageTitle
          titleClass="translate-x-[32px] fill-pale stroke-seawater"
          x={72}
          y={-8}
          starFill={tokens.colors.seawater}
          shadowColor={tokens.boxShadowColors.seaweedShadow}
          hiddenTitle={"Contact us"}
        >
          CONTACT
        </PageTitle>
        <Box
          withPadding
          withHeading
          boxClass="p-12 pt-8 border-seawater mt-16 shadow-seaweedShadow bg-pale"
        >
          <Heading as="h2" className="mb-4 text-xl font-bold text-seaweed">
            Let&#39;s Connect and Discover!
          </Heading>
          <Text className="text-seaweed">
            Ready to Begin? We&#39;re excited to learn more about you and your
            business – a few quick questions will help us get started on
            crafting the perfect solution.
          </Text>
        </Box>
        <Box
          withPadding
          boxClass="border-seawater mt-16 shadow-seaweedShadow bg-pale mt-14 w-full relative"
        >
          <ContactForm />
        </Box>
      </div>
    </PageWrap>
  );
};

export default Page;
