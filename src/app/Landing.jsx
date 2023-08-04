import LandingSvg from "@/components/LandingSvg";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <section className="w-full bg-landing flex flex-col items-center max-w-full overflow-hidden relative h-[100vh]">
      <div className="flex justify-center w-full max-w-[1400px] h-full pb-[200px] items-center">
        <LandingSvg />
      </div>
      <div className="w-full h-[140px] bg-seaweed absolute bottom-0"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block w-[1920px] h-[240px] bg-rainbow bg-auto bg-center"
      />
    </section>
  );
};

export default Landing;
