import Box from "@/components/Box";
import Title from "@/components/Title";
import React from "react";

const Stack = () => {
  return (
    <section className="bg-pinky h-[100vh] max-w-full overflow-hidden relative flex flex-col items-center pt-pageTop pb-pageBottom">
      <div className="max-w-constraint w-full flex flex-col">
        <Title boxClass="border-burnt bg-pale shadow-pinkyShadow">
          SKILL STACK
        </Title>
      </div>
      <div className="w-full h-[76px] bg-darkDijon absolute bottom-0"></div>
      <div
        alt=""
        className="absolute bottom-0 inline-block w-[1920px] h-[136px] bg-pinkSquiggle bg-auto bg-center"
      />
    </section>
  );
};

export default Stack;
