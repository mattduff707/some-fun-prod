import Box from "@/components/Box";
import Heading from "@/components/Heading";
import Highlight from "@/components/Highlight";
import PageTitle from "@/components/PageTitle";
import PageWrap from "@/components/PageWrap";
import Text from "@/components/Text";
import TextInput from "@/components/TextInput";
import { projectData, tokens } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        >
          CONTACT
        </PageTitle>
        <Box
          withPadding
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
          boxClass="p-12 pt-8 border-seawater mt-16 shadow-seaweedShadow bg-pale mt-14 w-full"
        >
          <p className="mb-10 text-lg text-seaweed">
            <Highlight>*</Highlight> indicates required fields
          </p>
          <form className="flex flex-col gap-6">
            <div className="flex gap-8 max1000:flex-col max1000:gap-6">
              <TextInput label="Name" className="flex-1" required />
              <TextInput label="Email" className="flex-1" required />
            </div>
            <div className="flex gap-8 max1000:flex-col max1000:gap-6">
              <TextInput label="Business Name" className="flex-1" />
              <TextInput label="Location" className="flex-1" />
            </div>
            <div className="flex gap-8 max1000:flex-col max1000:gap-6">
              <TextInput label="Social media handle(s)" className="flex-1" />
              <TextInput label="Website" className="flex-1" />
            </div>
            <div className="flex gap-8 max1000:flex-col max1000:gap-6">
              <TextInput
                label="Do you have a budget for this project?"
                className="flex-1"
              />
              <TextInput
                label="Ideally this project is done by?"
                className="flex-1"
              />
            </div>
            <TextInput label="Tell us about your project!" required textarea />
          </form>
        </Box>
      </div>
    </PageWrap>
  );
};

export default Page;
