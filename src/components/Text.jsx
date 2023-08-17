import React from "react";

const Text = ({ children, className }) => {
  return <p className={`max600:text-base text-lg ${className}`}>{children}</p>;
};

export default Text;
