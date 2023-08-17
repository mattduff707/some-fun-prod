import React from "react";

const Box = ({ boxClass, children }) => {
  return (
    <div
      className={`max600:rounded-boxMobile rounded-box border-[8px] shadow-box ${boxClass}`}
    >
      {children}
    </div>
  );
};

export default Box;
