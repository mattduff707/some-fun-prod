import React from "react";

const FancyText = ({ wordClass, letterClass, text }) => {
  const firstLetter = text.charAt(0);
  const restOfTitle = text.slice(1);
  return (
    <span className={wordClass}>
      <span
        className={`font-bavistage font-medium text-[3.2rem] inline-block ${letterClass}`}
      >
        {firstLetter}
      </span>
      {restOfTitle}
    </span>
  );
};

export default FancyText;
