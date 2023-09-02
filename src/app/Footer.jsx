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
        <div className="flex flex-col justify-between gap-12 min900:flex-row min900:gap-0">
          <figure className="">
            <figcaption className="pb-6 font-bold">NAVIGATION</figcaption>
            <ul>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden transition-colors hover:text-burntDark"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden transition-colors hover:text-burntDark"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden transition-colors hover:text-burntDark"
                  href="/work"
                >
                  WORK
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  className="flex w-fit flex-col overflow-hidden transition-colors hover:text-burntDark"
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
              <li>
                <a
                  className="group flex items-center gap-2 pb-4 pl-[1px]"
                  href="mailto:howdy@somefunstudio.com"
                  target="_blank"
                >
                  <Email
                    className={
                      "h-[34px] w-[34px] fill-seaweed transition-colors group-hover:fill-burntDark"
                    }
                  />{" "}
                  HOWDY@SOMEFUNSTUDIO.COM
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-2 pb-4 pl-[2px]"
                  href="https://www.linkedin.com/company/some-fun-studio"
                  target="_blank"
                >
                  <Linkedin className="mr-1 h-[30px] w-[30px] fill-seaweed transition-colors group-hover:fill-burntDark" />{" "}
                  IN/SOMEFUNSTUDIO
                </a>
              </li>
              <li className="translate-x-[-2px]">
                <a
                  className="group flex items-center gap-2 pb-4 pl-[2px]"
                  href="https://www.instagram.com/somefunstudio"
                  target="_blank"
                >
                  <Insta className="fill-seaweed transition-colors group-hover:fill-burntDark" />{" "}
                  @SOMEFUNSTUDIO
                </a>
              </li>
            </ul>
          </figure>
        </div>
        <p className="pt-12">EST. 2019 SOME FUN STUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
