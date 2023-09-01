import ContactTemplate from "../../../components/emails/ContactTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);

    // const resendData = await resend.emails.send({
    //   from: "Contact <onboarding@somefunstudio.com>",
    //   to: ["matt@somefunstudio.com"],
    //   subject: "Contact Form Submission",
    //   react: ContactTemplate(),
    // });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
