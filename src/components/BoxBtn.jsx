import React from 'react';

const BoxBtn = ({ children, wrapClass, buttonClass, shadowClass }) => {
  return (
    <div className={`relative ${wrapClass} group`}>
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-[82px] translate-x-1.5 translate-y-1.5 -z-10 duration-800 ${shadowClass}`}
      />
      <button className={`rounded-[82px] -translate-x-0.5 -translate-y-0.5 ${buttonClass}`}>{children}</button>
    </div>
  );
};

export default BoxBtn;
