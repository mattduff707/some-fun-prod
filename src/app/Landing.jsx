import LandingSvg from "..//components/LandingSvg";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <section className="md:px-10 max1000:pb-[240px] relative flex h-[100vh] min-h-[800px] w-full max-w-full flex-col items-center overflow-hidden bg-landing px-4">
      <div className="flex h-full w-full max-w-[1400px] items-center justify-center pb-[200px]">
        <LandingSvg />
      </div>
      <div className="absolute bottom-0 h-[140px] w-full bg-seaweed"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block h-[240px] w-[1920px] bg-rainbow bg-auto bg-center"
      />
    </section>
  );
};

export default Landing;
