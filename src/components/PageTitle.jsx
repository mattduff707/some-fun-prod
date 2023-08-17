import React from "react";
import Star from "./Star";
import { tokens } from "@/constants";

const PageTitle = ({
  titleClass,
  starClass,
  shadowColor,
  children,
  x,
  y,
  starFill,
}) => {
  return (
    <div className="mb-8 h-[132px] w-[640px] pt-12">
      <div className="relative inline-block w-full overflow-visible  pb-[12%]">
        <svg
          viewBox="0 0 440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          className="absolute left-0 top-0 inline-block overflow-visible"
        >
          <style>
            {`
            .font {
                filter: drop-shadow(0px 2px 0.25px rgba(0, 0, 0, 0.10));
            }
            `}
          </style>
          <Star
            className={`${starClass}`}
            fill={starFill}
            x={x}
            y={y}
            shadowColor={shadowColor}
          />
          <text
            x="80"
            y="60"
            className={`font stroke-[2px] font-sans text-[48px] font-black tracking-tighter ${titleClass}`}
          >
            {children}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PageTitle;
