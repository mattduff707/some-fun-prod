import Box from "../components/Box";
import BoxBtn from "..//components/BoxBtn";
import Image from "next/image";
import React from "react";
import alissaPic from "../assets/alissaPic.png";
import mattPic from "../assets/mattPic.png";
import Highlight from "../components/Highlight";
import Star from "../components/Star";
import Title from "../components/Title";

const About = () => {
  return (
    <section className="relative flex max-w-full flex-col items-center overflow-hidden bg-seawater bg-cover pb-12 pt-8">
      <div className="bg-squiggleBg flex h-[100vh] w-full flex-col items-center bg-cover">
        <div className="w-full max-w-constraint pt-pageTop">
          <Title
            boxClass="border-seaweed bg-pale shadow-pinkyShadow shadow-seaweedShadow"
            titleClass={"fill-seaweed translate-x-[24px] translate-y-[4px]"}
          >
            THE TEAM
          </Title>
        </div>
      </div>
    </section>
  );
};

export default About;
