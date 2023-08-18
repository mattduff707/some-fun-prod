import Link from "next/link";
import React from "react";

const BoxBtn = ({
  children,
  wrapClass = "",
  buttonClass = "",
  shadowClass = "",
  link = false,
}) => {
  if (link) {
    return (
      <Link href={link} className={`group relative block ${wrapClass}`}>
        <span
          className={`duration-800 absolute left-0 top-0 block h-full w-full translate-x-1.5 translate-y-1.5 rounded-[82px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${shadowClass}`}
        />
        <span
          className={`block -translate-x-0.5 -translate-y-0.5 rounded-[82px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${buttonClass}`}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button className={`group relative ${wrapClass}`}>
      <span
        className={`duration-800 absolute left-0 top-0 block h-full w-full translate-x-1.5 translate-y-1.5 rounded-[82px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${shadowClass}`}
      />
      <span
        className={`block -translate-x-0.5 -translate-y-0.5 rounded-[82px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${buttonClass}`}
      >
        {children}
      </span>
    </button>
  );
};

export default BoxBtn;
