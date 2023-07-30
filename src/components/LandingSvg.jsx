import React from "react";
const font =
  "font-sans font-black text-[24px] fill-burntDark stroke-pale stroke-[0.5px] tracking-tighter";

const fun = `stroke-burntDark fill-pale font-sans font-black text-[24px] tracking-tighter stroke-[0.5px]`;

const LandingSvg = () => {
  return (
    <div className="inline-block relative w-full pb-[27%] align-middle overflow-hidden">
      <svg
        viewBox="0 0 260 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="inline-block absolute top-0 left-0 group py-8"
      >
        <style>
          {`
        .font {
            filter: drop-shadow(0px 1px 0px #ECC690) drop-shadow(0px 1px 0.25px rgba(0, 0, 0, 0.15));
        }

            `}
        </style>
        <text x="5" y="30" className={`${font} font`}>
          WE CREATE SOME{" "}
        </text>
        <text x="20" y="54" className={`${font} font`}>
          DIGITAL PRODUCTS
        </text>
        <text
          rotate="-8"
          x="237"
          y="30"
          style={{ animationDelay: "0.2s" }}
          className={`${fun} font group-hover:animate-loud`}
        >
          N
        </text>
        <text
          rotate="1"
          x="219"
          y="30"
          style={{ animationDelay: "0.1s" }}
          className={`${fun} font group-hover:animate-loud`}
        >
          U
        </text>
        <text
          rotate="-8"
          x="210"
          y="30"
          className={`${fun} font group-hover:animate-loud`}
        >
          F
        </text>
      </svg>
    </div>
  );
};

export default LandingSvg;
