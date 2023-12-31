import React from "react";

const Box = ({ boxClass, children, withPadding, withHeading }) => {
  return (
    <div
      className={`rounded-box border-[5px] shadow-box max600:rounded-boxMobile ${
        withPadding && `p-12 max600:p-6`
      } ${withHeading && `pt-8 max600:pt-4`} ${boxClass}`}
    >
      {children}
    </div>
  );
};

export default Box;
