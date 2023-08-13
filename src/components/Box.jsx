import React from "react";

const Box = ({ boxClass, children }) => {
  return (
    <div className={`border-[5px] rounded-box shadow-box ${boxClass}`}>
      {children}
    </div>
  );
};

export default Box;
