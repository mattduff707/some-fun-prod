import React from "react";
import logoHeader from "../assets/somefunLogoHeader.png";
import Image from "next/image";
import Insta from "../components/icons/insta";
import Email from "../components/icons/Email";
import Linkedin from "../components/icons/linkedin";

const Footer = () => {
  return (
    <footer className="p-16 flex justify-center">
      <div className="w-full max-w-constraint text-seaweed font-medium text-md">
        <div className="w-full pb-16">
          <Image className="w-[240px] h-auto" src={logoHeader} alt="Some Fun" />
        </div>
        <div className="flex justify-between flex-col gap-12 900:gap-0 900:flex-row">
          <figure className="">
            <figcaption className="font-bold pb-6">NAVIGATION</figcaption>
            <ul>
              <li className="pb-4">HOME</li>
              <li className="pb-4">SERVICES</li>
              <li className="pb-4">WORK</li>
              <li className="pb-4">ABOUT</li>
            </ul>
          </figure>
          <div>
            <p className="font-bold pb-6">LOCATION</p>
            <p>SEATTLE, WA</p>
          </div>
          <figure className="">
            <figcaption className="font-bold pb-6">CONTACT US</figcaption>
            <ul>
              <li className="pb-4 flex items-center gap-2 pl-[2px]">
                <Email className={"w-[30px] h-[30px]"} />{" "}
                HOWDY@SOMEFUNSTUDIO.COM
              </li>
              <li className="pb-4 flex items-center gap-2 pl-[2px]">
                <Linkedin className="w-[30px] h-[30px] mr-1" /> IN/SOMEFUNSTUDIO
              </li>
              <li className="pb-4 flex items-center gap-2">
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
