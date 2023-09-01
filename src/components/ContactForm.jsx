"use client";
import React, { useState } from "react";
import TextInput from "./TextInput";
import CoolButton from "./CoolButton";

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
  const [loading, setLoading] = useState(false);
  const [incompleteRequired, setIncompleteRequired] = useState([]);
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
      console.log(formData[name]);
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

    console.log(res);

    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex gap-8 max1000:flex-col max1000:gap-6">
        <TextInput
          name={formNames.name}
          label="Name"
          className="flex-1"
          required
        />
        <TextInput
          name={formNames.email}
          label="Email"
          className="flex-1"
          required
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
      />
      <div className="grid w-full place-items-center pt-8 max600:pb-8">
        <CoolButton type="submit">Send</CoolButton>
      </div>
    </form>
  );
};

export default ContactForm;
