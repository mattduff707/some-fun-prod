import React from "react";

const PageWrap = ({ children, className }) => {
  return (
    <section
      className={`relative flex w-full justify-center px-6 pb-40 max600:pb-20 ${className} overflow-hidden`}
    >
      <div className="flex w-full animate-fadeIn justify-center opacity-0">
        {children}
      </div>
    </section>
  );
};

export default PageWrap;
