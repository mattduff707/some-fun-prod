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
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-burnt duration-[0.2s] group-hover:scale-[1.8] motion-safe:transition-transform"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-dijon duration-[0.2s] group-hover:scale-[1.6] motion-safe:transition-transform"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-pinky duration-[0.2s] group-hover:scale-[1.4] motion-safe:transition-transform"></span>
      <span className="absolute top-0 z-[-1] grid h-[68px] w-[121px] place-items-center rounded-[16px] bg-seaweed duration-[0.2s] group-hover:scale-[1.2] motion-safe:transition-transform"></span>
    </button>
  );
};

export default CoolButton;
