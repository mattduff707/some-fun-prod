import Image from "next/image";
import Link from "next/link";
import React from "react";
import SimpleStar from "./icons/simpleStar";

const ProjectLink = ({ project }) => {
  return (
    <div
      key={project.title}
      className="group relative flex w-[calc(33%-14px)] flex-col items-center gap-4 overflow-hidden max900:w-[calc(50%-14px)] max500:w-[80%]"
      //   href={project.link}
    >
      <div className="relative w-full overflow-hidden rounded-[28px] border-4 border-darkDijon shadow-box shadow-dijonShadow">
        <Image src={project.thumbnail} className=" h-auto w-full " alt="" />
        <div className="absolute top-0 flex h-full w-full items-center justify-center bg-pale opacity-0 transition-opacity group-hover:opacity-100">
          <Image src={project.thumbnailHover} alt="" />
        </div>
        <div className="absolute left-[50%] top-[50%] flex w-[140%] translate-x-[-50%] translate-y-[-50%] rotate-45 items-center justify-center gap-2 bg-burnt py-2 text-lg text-pale">
          <SimpleStar />
          <p>COMING SOON</p>
          <SimpleStar />
        </div>
      </div>
      <h3 className="text-center text-lg text-seaweed">{project.title}</h3>
    </div>
  );
};

export default ProjectLink;
