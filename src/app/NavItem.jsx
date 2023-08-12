"use client";
import Underline from "@/components/icons/Underline";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tokens } from "@/constants";

const NavItem = ({ text, path, pathClass, exact }) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === path : pathname.includes(path);

  return (
    <li>
      <Link
        href={path}
        className="block relative px-6 py-2 text-center group cursor-pointer navItem"
      >
        <span
          style={{
            color: isActive ? tokens.colors.burntDark : undefined,
            fontWeight: isActive ? "bold" : undefined,
          }}
          className="relative block transition-colors duration-[0.5s]"
        >
          {text}
          <div className="absolute bottom-[-6px] left-[50%] translate-x-[-50%] w-full">
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
