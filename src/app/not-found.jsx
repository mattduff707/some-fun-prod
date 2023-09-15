import React from "react";
import BoxBtn from "../components/BoxBtn";

const FourOhFour = () => {
  return (
    <section className="bg-fourohfourBgDesktop flex h-[832px] w-full flex-col items-center object-cover pt-20 text-fluff">
      <h1 className="font-bavistage text-[7rem] [text-shadow:_0_3px_6px_rgb(0_0_0_/_40%)] max1000:text-[5rem] max600:text-[3.2rem] max400:text-[2.8rem]">
        Whoopsie Daisy!
      </h1>
      <h2 className="text-[7rem] font-bold [text-shadow:_0_3px_6px_rgb(0_0_0_/_40%)] max1000:text-[5rem] max600:text-[3.2rem] max400:text-[2.8rem]">
        404
      </h2>
      <p className=" -mt-8 text-xl font-bold [text-shadow:_0_3px_6px_rgb(0_0_0_/_40%)] max1000:-mt-6 max600:-mt-4 max600:text-lg">
        page not found
      </p>
      <BoxBtn
        buttonClass={
          "border-4 text-lg border-seaweed font-semibold text-seaweed bg-pale whitespace-nowrap group-hover:bg-seaweed group-hover:text-pale group-hover:border-seaweed"
        }
        shadowClass="bg-seaweed"
        wrapClass="mt-16 max1000:mt-12"
        link="/"
      >
        TAKE ME HOME
      </BoxBtn>
    </section>
  );
};

export default FourOhFour;
