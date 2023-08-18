"use client";
import Underline from "../components/icons/Underline";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tokens } from "../constants";

const NavItem = ({ text, path, pathClass, exact, activeColor }) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === path : pathname.includes(path);

  return (
    <li>
      <Link
        href={path}
        className="navItem group relative block cursor-pointer px-6 py-2 text-center"
      >
        <span
          style={{
            color: isActive ? activeColor : undefined,
            fontWeight: isActive ? "bold" : undefined,
          }}
          className="relative block transition-colors duration-[0.5s]"
        >
          {text}
          <div className="absolute bottom-[-6px] left-[50%] w-full translate-x-[-50%]">
            <Underline
              className={"overflow-visible"}
              pathClass={pathClass}
              isActive={isActive}
            />
          </div>
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
