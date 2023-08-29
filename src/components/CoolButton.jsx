import React from "react";

const CoolButton = ({ children, type }) => {
  return (
    <button
      className={`group relative isolate text-xl font-bold text-pale`}
      type={type}
    >
      <span className="z-[2] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-seawater">
        {children}
      </span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-burnt transition-transform duration-[0.2s] group-hover:scale-[1.8]"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-dijon transition-transform duration-[0.2s] group-hover:scale-[1.6]"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-pinky transition-transform duration-[0.2s] group-hover:scale-[1.4]"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-seaweed transition-transform duration-[0.2s] group-hover:scale-[1.2]"></span>
    </button>
  );
};

export default CoolButton;
