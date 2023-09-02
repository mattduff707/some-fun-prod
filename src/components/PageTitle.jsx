import React from "react";
import Star from "./Star";

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
    <div className="mb-12 h-[99px] w-[640px] pt-12 max600:mb-4 max600:w-[480px]">
      <div className="relative inline-block w-full overflow-visible  pb-[12%]">
        <svg
          viewBox="0 0 440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          className="absolute left-0 top-0 inline-block overflow-visible"
        >
          <style>
            {`
            .font-title {
                filter: drop-shadow(0px 2px 1.25px rgba(0, 0, 0, 0.30));
            }
            `}
          </style>
          <Star
            className={`overflow-visible ${starClass}`}
            fill={starFill}
            x={x}
            y={y}
            shadowColor={shadowColor}
          />
          <text
            x="80"
            y="60"
            className={`font-title transform-gpu stroke-[2px] font-sans text-[48px] font-black tracking-tighter ${titleClass}`}
          >
            {children}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PageTitle;
