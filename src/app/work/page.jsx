import PageTitle from "@/components/PageTitle";
import { tokens } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <section className="relative flex w-full justify-center bg-dijon px-6 pb-40">
      <div className="flex w-full max-w-constraint flex-col items-center">
        <PageTitle
          titleClass="translate-x-[66px] fill-pale stroke-darkDijon"
          x={106}
          y={-8}
          starFill={tokens.colors.darkDijon}
          shadowColor={tokens.boxShadowColors.dijonShadow}
        >
          WORK
        </PageTitle>
      </div>
    </section>
  );
};

export default Page;
