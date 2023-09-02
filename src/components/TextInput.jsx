import React from "react";
import Highlight from "./Highlight";
import { tokens } from "../constants";

const TextInput = ({ label, className, textarea, required, name, error }) => {
  return (
    <label className={`group flex flex-col gap-4 ${className}`}>
      {textarea ? (
        <textarea
          style={{ transform: "translateZ(0)" }}
          name={name}
          className="peer order-2 h-[180px] rounded-[38px] border-[3px] bg-offwhite p-4 px-6 text-lg text-seaweed outline-none transition-all duration-[0.2s] focus:border-burnt focus:shadow-box focus:shadow-paleShadow max600:h-[240px] max600:text-base"
        />
      ) : (
        <input
          name={name}
          style={{ transform: "translateZ(0)" }}
          className="peer order-2 h-[54px] rounded-[100px] border-[3px] bg-offwhite p-2 px-4 text-lg text-seaweed outline-none transition-all duration-[0.2s] focus:border-burnt focus:shadow-box focus:shadow-paleShadow max600:text-base"
        />
      )}
      <span className="order-1 flex w-fit flex-col overflow-hidden text-lg font-bold text-seaweed">
        <span style={{ color: error ? tokens.colors.burnt : "inherit" }}>
          {label}
          {required && <Highlight className="ml-[2px]">*</Highlight>}
        </span>
      </span>
    </label>
  );
};

export default TextInput;
