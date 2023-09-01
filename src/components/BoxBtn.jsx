import Link from "next/link";
import React from "react";

const BoxBtn = ({
  children,
  wrapClass = "",
  buttonClass = "",
  shadowClass = "",
  link = false,
  onClick,
}) => {
  if (link) {
    return (
      <Link href={link} className={`group relative block ${wrapClass}`}>
        <span
          className={`duration-800 absolute left-0 top-0 block h-full w-full translate-x-1.5 translate-y-1.5 rounded-[82px] bg-burntDark transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${shadowClass}`}
        />
        <span
          className={`text-md block -translate-x-0.5 -translate-y-0.5 rounded-[82px] px-12 py-3 transition-all group-hover:translate-x-0 group-hover:translate-y-0 max600:px-8  max600:py-2 max600:text-sm ${buttonClass}`}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`group relative ${wrapClass}`}>
      <span
        className={`duration-800 absolute left-0 top-0 block h-full w-full translate-x-1.5 translate-y-1.5 rounded-[82px] bg-burntDark transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${shadowClass}`}
      />
      <span
        className={`text-md block -translate-x-0.5 -translate-y-0.5 rounded-[82px] px-12 py-3 transition-all group-hover:translate-x-0 group-hover:translate-y-0 max600:px-8  max600:py-2 max600:text-sm ${buttonClass}`}
      >
        {children}
      </span>
    </button>
  );
};

export default BoxBtn;
