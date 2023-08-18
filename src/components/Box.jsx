import React from "react";

const Box = ({ boxClass, children }) => {
  return (
    <div
      className={`rounded-box border-[8px] p-12 pt-8 shadow-box max600:rounded-boxMobile max600:p-6 max600:pt-4 ${boxClass}`}
    >
      {children}
    </div>
  );
};

export default Box;
