import React from "react";

function Underline({ className, pathClass, isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 728 90"
      className={`${className}`}
    >
      <path
        className={`${pathClass}  navPath`}
        style={{ strokeDashoffset: isActive ? 1220 : undefined }}
        stroke="black"
        strokeOpacity={1}
        strokeWidth={28}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30.072 77.482c8.972 4.056 35.762-45.03 68.131-45.03s42.549 45.03 83.785 45.03 58.61-42.677 91.842-42.677c36.64 0 37.277 42.677 83.449 42.677s56.27-43.404 86.415-43.404c30.146 0 41.256 43.404 84.215 43.404s47.352-42.404 82.75-43.404c46.795-1.32 79.436 48.514 87.413 43.404 7.976-5.11 0-12.943 0-12.943s-39.127-44.806-87.413-44.806c-40.758 0-45.981 45.215-82.75 44.806-36.77-.41-47.454-44.07-84.215-44.806-42.221-.846-45.053 44.806-86.415 44.806-42.773 0-40.676-44.818-83.449-44.806-42.684.012-49.158 44.806-91.842 44.806-33.984 0-49.328-45.015-83.785-44.806-36.546 0-68.131 44.806-68.131 44.806s-8.973 8.886 0 12.943z"
      ></path>
    </svg>
  );
}

export default Underline;
