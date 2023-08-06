import React from "react";

const TitleText = ({ titleClass, children }) => {
  return (
    <div className="inline-block relative w-full pb-[12%] overflow-visible">
      <svg
        viewBox="0 0 440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="inline-block absolute top-0 left-0 overflow-visible"
      >
        <style>
          {`
            .font {
                filter: drop-shadow(0px 1px 0px #ECC690) drop-shadow(0px 1px 0.25px rgba(0, 0, 0, 0.15));
            }
            `}
        </style>
        <text
          x="80"
          y="60"
          className={`font font-sans font-black text-[48px] fill-burntDark stroke-pale stroke-[2px] tracking-tighter ${titleClass}`}
        >
          {children}
        </text>
      </svg>
    </div>
  );
};

export default TitleText;
