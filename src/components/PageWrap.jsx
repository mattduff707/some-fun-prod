import React from "react";

const PageWrap = ({ children, className }) => {
  return (
    <section
      className={`relative flex w-full justify-center px-6 pb-40 ${className}`}
    >
      <div className="animate-fadeIn flex w-full justify-center opacity-0">
        {children}
      </div>
    </section>
  );
};

export default PageWrap;
