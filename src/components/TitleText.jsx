import React from "react";

const TitleText = ({ titleClass, children }) => {
  return (
    <div className="relative inline-block w-full overflow-visible pb-[12%]">
      <svg
        viewBox="0 0 440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="absolute left-0 top-0 inline-block overflow-visible"
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
          className={`font stroke-[2px] font-sans text-[48px] font-black tracking-tighter ${titleClass}`}
        >
          {children}
        </text>
      </svg>
    </div>
  );
};

export default TitleText;
