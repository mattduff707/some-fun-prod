import ContactTemplate from "../../../components/emails/ContactTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      name,
      email,
      business,
      location,
      socials,
      website,
      budget,
      deadline,
      description,
    } = await req.json();

    const resendData = await resend.emails.send({
      from: "Contact <onboarding@somefunstudio.com>",
      to: ["matt@somefunstudio.com"],
      subject: "Contact Form Submission",
      react: ContactTemplate({
        name,
        email,
        business,
        location,
        socials,
        website,
        budget,
        deadline,
        description,
      }),
    });

    return NextResponse.json(resendData);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
