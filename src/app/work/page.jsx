import PageTitle from "@/components/PageTitle";
import PageWrap from "@/components/PageWrap";
import { tokens } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <PageWrap className=" bg-dijon">
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
    </PageWrap>
  );
};

export default Page;
