import React from "react";

function Smiley({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      className={className}
    >
      <circle
        cx="9.059"
        cy="8.533"
        r="8.053"
        fill="#FFE3A6"
        stroke="#33524C"
        strokeWidth="0.895"
      ></circle>
      <path
        fill="#FFD780"
        d="M8.609.936c2.237-.126 4.184.675 5.694 2.101 1.51 1.427 2.358 3.361 2.358 5.378s-.726 3.942-2.236 5.369c-1.51 1.426-3.58 2.684-5.816 2.236V.936z"
      ></path>
      <circle cx="6.822" cy="7.191" r="0.895" fill="#33524C"></circle>
      <circle cx="11.296" cy="7.191" r="0.895" fill="#33524C"></circle>
      <path
        stroke="#33524C"
        strokeLinecap="round"
        strokeWidth="0.895"
        d="M6.375 10.323c0 4.026 5.368 4.026 5.368 0"
      ></path>
    </svg>
  );
}

export default Smiley;
