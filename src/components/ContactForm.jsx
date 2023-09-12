"use client";
import React, { useEffect, useRef, useState } from "react";
import TextInput from "./TextInput";
import CoolButton from "./CoolButton";
import Highlight from "./Highlight";
import BoxBtn from "./BoxBtn";
import LoadingStar from "./icons/LoadingStar";
import Image from "next/image";
import eggman from "../assets/eggman.png";

const formNames = {
  name: "name",
  email: "email",
  business: "business",
  location: "location",
  socials: "socials",
  website: "website",
  budget: "budget",
  deadline: "deadline",
  description: "description",
};
const required = [formNames.name, formNames.email, formNames.description];

const ContactForm = () => {
  const loadingRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [incompleteRequired, setIncompleteRequired] = useState([]);
  const handleTryAgain = () => {
    setError(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.entries(e.target).reduce((acc, [key, val]) => {
      if (formNames[val.name]) {
        return { ...acc, [val.name]: val.value };
      }
      return acc;
    }, {});

    const incomplete = required.filter((name) => {
      return formData[name].length === 0;
    });
    if (incomplete.length > 0) {
      setIncompleteRequired(incomplete);
      setLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log("ERROR");
      setError(true);
      if (incompleteRequired.length > 0) {
        setIncompleteRequired([]);
      }
      setLoading(false);
      return;
    }
    setSuccess(true);
    setIncompleteRequired([]);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      loadingRef.current.scrollIntoView({ block: "center" });
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        className="grid w-full place-items-center pt-8 max600:pb-8"
        ref={loadingRef}
      >
        <LoadingStar />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <p className="text-lg text-seaweed">
          Oops, something went wrong... Please try again or email us directly at
          <span className="font-bold"> howdy@somefunstudio.com</span>
        </p>

        <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
          <BoxBtn
            onClick={handleTryAgain}
            buttonClass={
              "border-4 border-seaweed font-semibold text-seaweed bg-pale flex items-center justify-center gap-2 whitespace-nowrap group-hover:text-pale group-hover:bg-burntDark group-hover:border-burntDark"
            }
          >
            TRY AGAIN
          </BoxBtn>
        </div>
      </>
    );
  }

  if (success) {
    return (
      <>
        {/* <Image
          src={eggman}
          alt=""
          className="mx-auto my-4 h-auto w-3/4 rounded-[40px] border-8 border-seawater"
        /> */}
        <p className="text-center text-xl font-bold text-seaweed max600:text-lg">
          Thank you for contacting us. We&#39;ll be in touch soon!
        </p>
      </>
    );
  }

  return (
    <>
      <p className="mb-10 text-lg text-seaweed">
        <Highlight>*</Highlight> indicates required fields
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-8 max1000:flex-col max1000:gap-6">
          <TextInput
            name={formNames.name}
            label="Name"
            className="flex-1"
            required
            error={incompleteRequired.includes(formNames.name)}
          />
          <TextInput
            name={formNames.email}
            label="Email"
            className="flex-1"
            required
            error={incompleteRequired.includes(formNames.email)}
          />
        </div>
        <div className="flex gap-8 max1000:flex-col max1000:gap-6">
          <TextInput
            name={formNames.business}
            label="Business Name"
            className="flex-1"
          />
          <TextInput
            name={formNames.location}
            label="Location"
            className="flex-1"
          />
        </div>
        <div className="flex gap-8 max1000:flex-col max1000:gap-6">
          <TextInput
            name={formNames.socials}
            label="Social media handle(s)"
            className="flex-1"
          />
          <TextInput
            name={formNames.website}
            label="Website"
            className="flex-1"
          />
        </div>
        <div className="flex gap-8 max1000:flex-col max1000:gap-6">
          <TextInput
            label="Do you have a budget for this project?"
            className="flex-1"
            name={formNames.budget}
          />
          <TextInput
            label="Ideally this project is done by?"
            className="flex-1"
            name={formNames.deadline}
          />
        </div>
        <TextInput
          name={formNames.description}
          label="Tell us about your project!"
          required
          textarea
          error={incompleteRequired.includes(formNames.description)}
        />
        {incompleteRequired.length > 0 && (
          <p className="text-center text-lg text-burnt">
            Please fill out the required fields:{" "}
            <Highlight>{incompleteRequired.join(", ")}</Highlight>
          </p>
        )}
        <div className="grid w-full place-items-center pt-8 max600:pb-8">
          <CoolButton type="submit">Send</CoolButton>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
