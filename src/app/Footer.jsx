import React from "react";
import logoHeader from "../assets/somefunLogoHeader.png";
import Image from "next/image";
import Insta from "../components/icons/insta";
import Email from "../components/icons/Email";
import Linkedin from "../components/icons/linkedin";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center p-16">
      <div className="text-md w-full max-w-constraint font-medium text-seaweed">
        <div className="w-full pb-16">
          <Image className="h-auto w-[240px]" src={logoHeader} alt="Some Fun" />
        </div>
        <div className="flex flex-col justify-between gap-12 900:flex-row 900:gap-0">
          <figure className="">
            <figcaption className="pb-6 font-bold">NAVIGATION</figcaption>
            <ul>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-seaweed after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:translate-x-0"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-seaweed after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:translate-x-0"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-seaweed after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:translate-x-0"
                  href="/work"
                >
                  WORK
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-seaweed after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:translate-x-0"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </figure>
          <div>
            <p className="pb-6 font-bold">LOCATION</p>
            <p>SEATTLE, WA</p>
          </div>
          <figure className="">
            <figcaption className="pb-6 font-bold">CONTACT US</figcaption>
            <ul>
              <li className="flex items-center gap-2 pb-4 pl-[2px]">
                <Email className={"h-[30px] w-[30px]"} />{" "}
                HOWDY@SOMEFUNSTUDIO.COM
              </li>
              <li className="flex items-center gap-2 pb-4 pl-[2px]">
                <Linkedin className="mr-1 h-[30px] w-[30px]" /> IN/SOMEFUNSTUDIO
              </li>
              <li className="flex items-center gap-2 pb-4">
                <Insta /> @SOMEFUNSTUDIO
              </li>
            </ul>
          </figure>
        </div>
        <p className="pt-12">EST. 2021 SOME FUN STUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
