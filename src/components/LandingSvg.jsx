import React from "react";
const font =
  "font-sans font-black text-base fill-burntDark stroke-pale stroke-[0.5px] tracking-tighter";
const LandingSvg = () => {
  return (
    <div className="inline-block relative w-full pb-[19%] align-middle overflow-hidden">
      <svg
        viewBox="0 0 260 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="inline-block absolute top-0 left-0"
      >
        <style>
          {`
        .font {
            filter: drop-shadow(0px 1px 0px #ECC690) drop-shadow(0px 1px 0.25px rgba(0, 0, 0, 0.15));
        }
            `}
        </style>
        <text x="0" y="20" className={`${font} font`}>
          WE CREATE SOME FUN
        </text>
        <text x="12" y="38" className={`${font} font`}>
          DIGITAL PRODUCTS
        </text>
      </svg>
    </div>
  );
};

export default LandingSvg;
