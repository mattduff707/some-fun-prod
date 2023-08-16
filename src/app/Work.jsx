import Title from "../components/Title";
import React from "react";

const Work = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-dijon bg-cover pb-pageBottom pt-pageTop">
      <div className="flex w-full max-w-constraint flex-col">
        <Title
          boxClass="border-darkDijon bg-pale shadow-pinkyShadow"
          titleClass="fill-darkDijon translate-x-[60px]"
        >
          WORK
        </Title>
      </div>
      <div className="absolute bottom-0 h-[76px] w-full bg-seawater"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block h-[136px] w-[1920px] bg-pinkSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Work;
