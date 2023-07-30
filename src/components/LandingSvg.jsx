import React from "react";
const font =
  "font-sans font-black text-[24px] fill-burntDark stroke-pale stroke-[0.75px] tracking-tighter";

const fun = `stroke-burntDark fill-pale font-sans font-black text-[24px] tracking-tighter stroke-[0.75px]`;

const LandingSvg = () => {
  return (
    <div className="inline-block relative w-full pb-[44%] align-middle overflow-hidden">
      <svg
        viewBox="0 0 308 110"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="inline-block absolute top-0 left-0 group py-8 border-2 border-burntDark border-solid"
      >
        <style>
          {`
        .font {
            filter: drop-shadow(0px 1px 0px #ECC690) drop-shadow(0px 1px 0.25px rgba(0, 0, 0, 0.15));
        }

        .star-shadow {
          filter: drop-shadow(0 4px 2px rgba(236, 198, 144, 0.5));
          transform-origin: 50% 50%;
        }

            `}
        </style>
        <svg
          viewBox="0 0 336 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible py-4"
        >
          <path
            d="M163.261 4.07895C163.962 -1.20903 171.613 -1.20902 172.314 4.07897L184.055 92.6186C184.593 96.6714 189.776 98.0298 192.232 94.7614L245.312 24.1219C248.51 19.8661 255.167 23.5944 253.209 28.5446L220.241 111.885C218.753 115.648 222.531 119.344 226.26 117.773L307.066 83.7285C311.951 81.6704 315.831 88.1895 311.692 91.5016L242.235 147.089C239.11 149.59 240.486 154.615 244.449 155.175L331.562 167.479C336.799 168.218 336.799 175.782 331.562 176.521L244.449 188.825C240.486 189.385 239.11 194.41 242.235 196.911L311.692 252.498C315.831 255.811 311.951 262.33 307.066 260.272L226.26 226.227C222.531 224.656 218.753 228.352 220.241 232.115L253.209 315.455C255.167 320.406 248.51 324.134 245.312 319.878L192.232 249.239C189.776 245.97 184.593 247.329 184.055 251.381L172.314 339.921C171.613 345.209 163.962 345.209 163.261 339.921L151.52 251.381C150.983 247.329 145.799 245.97 143.343 249.239L90.2632 319.878C87.0653 324.134 80.4084 320.406 82.3666 315.455L115.334 232.115C116.822 228.352 113.044 224.656 109.315 226.227L28.5093 260.272C23.6244 262.33 19.7446 255.811 23.8832 252.498L93.3405 196.911C96.4657 194.41 95.0893 189.385 91.1259 188.825L4.01313 176.521C-1.22376 175.782 -1.22376 168.218 4.01313 167.479L91.1259 155.175C95.0893 154.615 96.4657 149.59 93.3405 147.089L23.8832 91.5016C19.7446 88.1895 23.6244 81.6704 28.5092 83.7285L109.315 117.773C113.044 119.344 116.822 115.648 115.334 111.885L82.3666 28.5446C80.4084 23.5944 87.0653 19.866 90.2632 24.1219L143.343 94.7614C145.799 98.0298 150.983 96.6714 151.52 92.6186L163.261 4.07895Z"
            fill="#F9EFE1"
            className="star-shadow animation-rotation animate-rotation"
          />
        </svg>
        <text x="48" y="54" className={`${font} font`}>
          WE CREATE SOME{" "}
        </text>
        <text x="64" y="78" className={`${font} font`}>
          DIGITAL PRODUCTS
        </text>
        <text
          rotate="-8"
          x="279"
          y="54"
          style={{ animationDelay: "0.2s" }}
          className={`${fun} font group-hover:animate-loud`}
        >
          N
        </text>
        <text
          rotate="1"
          x="261"
          y="54"
          style={{ animationDelay: "0.1s" }}
          className={`${fun} font group-hover:animate-loud`}
        >
          U
        </text>
        <text
          rotate="-8"
          x="252"
          y="54"
          className={`${fun} font group-hover:animate-loud`}
        >
          F
        </text>
      </svg>
    </div>
  );
};

export default LandingSvg;
