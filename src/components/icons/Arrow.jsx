import { tokens } from "@/constants";
import React from "react";

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="13"
      fill="none"
      viewBox="0 0 21 13"
      stroke={tokens.colors.seaweed}
    >
      <path
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.447 6.555h17.585m0 0l-3.673 4.63m3.673-4.63l-3.673-5.548"
      ></path>
    </svg>
  );
}

export default Arrow;
