import React from "react";

const ContactTemplate = ({
  name,
  email,
  business,
  location,
  socials,
  website,
  budget,
  deadline,
  description,
}) => {
  return (
    <div>
      <h1 style={{ marginBottom: "24px", textDecoration: "underline" }}>
        Contact
      </h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Business: {business}</p>
      <p>Location: {location}</p>
      <p>Socials: {socials}</p>
      <p>Website: {website}</p>
      <p>Budget: {budget}</p>
      <p>Deadline: {deadline}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ContactTemplate;
