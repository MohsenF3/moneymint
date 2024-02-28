import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const body = await request.json();
    const { email, name, message, number } = body;
    await transporter.sendMail({
      from: name,
      to: SMTP_EMAIL,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Number: ${number} </p>
        <p>Message: ${message} </p>
        `,
    });
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "COULD NOT SEND MESSAGE", status: 500 });
  }
}
