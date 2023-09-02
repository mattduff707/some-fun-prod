"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { tokens } from "../constants";

const ContactLink = ({ className, onClick }) => {
  const pathname = usePathname();

  const isActive = pathname.includes("contact");
  return (
    <Link
      onClick={onClick}
      style={{
        background: isActive && tokens.colors.seaweed,
        borderColor: isActive && tokens.colors.seaweed,
        color: isActive && tokens.colors.offwhite,
      }}
      href="/contact"
      className={`grid h-[31px] w-[132px] place-items-center whitespace-nowrap rounded-[5px] border-2 border-seaweed font-bold text-seaweed transition-colors hover:border-burntDark hover:bg-burntDark hover:text-offwhite ${className}`}
    >
      CONTACT US
    </Link>
  );
};

export default ContactLink;
