import Underline from "@/components/icons/Underline";
import React from "react";

const NavItem = ({ children, pathClass }) => {
  return (
    <li
      className={`relative px-6 py-2 text-center group cursor-pointer navItem`}
    >
      <span className="relative block">
        {children}
        <div className="absolute bottom-[-6px] left-[50%] translate-x-[-50%] w-[60px] overflow-hidden">
          <Underline className={""} pathClass={pathClass} />
        </div>
      </span>
    </li>
  );
};

export default NavItem;
