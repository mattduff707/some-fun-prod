import React from "react";

const BoxBtn = ({
  children,
  wrapClass = "",
  buttonClass = "",
  shadowClass = "",
}) => {
  return (
    <div className={`relative ${wrapClass} group`}>
      <div
        className={`duration-800 absolute left-0 top-0 h-full w-full translate-x-1.5 translate-y-1.5 rounded-[82px] ${shadowClass}`}
      />
      <button
        className={`-translate-x-0.5 -translate-y-0.5 rounded-[82px] ${buttonClass}`}
      >
        {children}
      </button>
    </div>
  );
};

export default BoxBtn;
