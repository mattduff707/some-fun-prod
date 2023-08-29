import React from "react";
import Highlight from "./Highlight";

const TextInput = ({ label, className, textarea, required }) => {
  return (
    <label className={`group flex flex-col gap-4 ${className}`}>
      {textarea ? (
        <textarea className="bg-offwhite peer order-2 h-[180px] rounded-[38px] p-4 px-6 text-lg text-seaweed outline outline-[3px] outline-seawater transition-[outline-color] duration-[0.2s] focus:outline-burnt max600:h-[240px] max600:text-base" />
      ) : (
        <input className="bg-offwhite peer order-2 h-[54px] rounded-[100px] p-2 px-4 text-lg text-seaweed outline outline-[3px] outline-seawater transition-[outline-color] duration-[0.2s] focus:outline-burnt max600:text-base" />
      )}
      <span className="order-1 flex w-fit flex-col overflow-hidden text-lg font-bold text-seaweed after:mt-[-2px] after:h-[3px] after:w-full after:translate-x-[-100%] after:rounded-[120px] after:bg-seaweed after:transition-transform after:content-[''] peer-focus:after:translate-x-0">
        <span>
          {label}
          {required && <Highlight className="ml-[2px]">*</Highlight>}
        </span>
      </span>
    </label>
  );
};

export default TextInput;
