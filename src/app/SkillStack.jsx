import React from "react";

const SkillStack = ({ title, items }) => {
  const firstLetter = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <div className="  w-[350px] h-[314px] flex flex-col rounded-[30px] shadow-box shadow-pinkyShadow">
      <div className="w-full flex-1 bg-pale border-8 border-burnt rounded-[30px_30px_0px_0px] grid place-items-center">
        <h3 className="text-center font-black text-burnt text-xxl">
          <span className="font-bavistage font-medium text-[3.2rem]">
            {firstLetter}
          </span>
          {restOfTitle}
        </h3>
      </div>
      <div className="border-8 border-t-0 border-burnt flex-[2] w-full bg-burnt shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[0px_0px_30px_30px] grid place-items-center">
        <ul>
          {items.map((item) => (
            <li key={item} className="text-center font-bold text-pale text-xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillStack;
