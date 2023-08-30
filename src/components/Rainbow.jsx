import React from "react";

const Rainbow = ({ className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="w-full flex-1 bg-seaweed"></div>
      <div className="w-full flex-1 bg-seawater"></div>
      <div className="w-full flex-1 bg-dijon"></div>
      <div className="w-full flex-1 bg-burnt"></div>
      <div className="w-full flex-1 bg-pinky"></div>
    </div>
  );
};

export default Rainbow;
