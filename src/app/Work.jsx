import Title from "../components/Title";
import React from "react";

const Work = () => {
  return (
    <section className="bg-cover bg-dijon max-w-full overflow-hidden relative flex flex-col items-center pt-pageTop pb-pageBottom">
      <div className="max-w-constraint w-full flex flex-col">
        <Title
          boxClass="border-darkDijon bg-pale shadow-pinkyShadow"
          titleClass="fill-darkDijon translate-x-[60px]"
        >
          WORK
        </Title>
      </div>
      {/* <div className="w-full h-[76px] bg-darkDijon absolute bottom-0"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block w-[1920px] h-[136px] bg-pinkSquiggle bg-auto bg-center"
      /> */}
    </section>
  );
};

export default Work;
