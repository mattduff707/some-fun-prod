import React from "react";

const Highlight = ({ children, className }) => {
  return (
    <span className={`font-bold text-burntDark ${className}`}>{children}</span>
  );
};

export default Highlight;
