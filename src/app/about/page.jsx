import PageTitle from "@/components/PageTitle";
import { tokens } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <section className="relative flex w-full justify-center bg-seawater px-6 pb-40">
      <div className="flex w-full max-w-constraint flex-col items-center">
        <PageTitle
          titleClass="translate-x-[56px] fill-pale stroke-seaweed"
          x={98}
          y={-8}
          starFill={tokens.colors.seaweed}
          shadowColor={tokens.boxShadowColors.seaweedShadow}
        >
          ABOUT
        </PageTitle>
      </div>
    </section>
  );
};

export default Page;
