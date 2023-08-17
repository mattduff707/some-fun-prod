import React from "react";
import FancyText from "../components/FancyText.jsx";

const SkillStack = ({ title, items, wrapClass }) => {
  return (
    <div
      className={`max600:w-[315px] max600:h-[283px] flex h-[314px] w-[350px] flex-col rounded-[30px] shadow-box shadow-[hsla(0,0%,20%,0.2)] ${wrapClass}`}
    >
      <div className="grid w-full flex-1 place-items-center rounded-[30px_30px_0px_0px] border-8 border-burnt bg-pale">
        <h3 className="max600:text-xl text-center text-xxl font-black text-burnt">
          <FancyText text={title} letterClass={"max600:text-[2.8rem]"} />
        </h3>
      </div>
      <div className="grid w-full flex-[2] place-items-center rounded-[0px_0px_30px_30px] border-8 border-t-0 border-burnt bg-burnt shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.25)]">
        <ul>
          {items.map((item) => (
            <li
              key={item}
              className="max600:text-lg text-center text-xl font-bold text-pale"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillStack;
