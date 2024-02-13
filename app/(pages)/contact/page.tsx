import ContactForm from "@/app/ui/contact/ContactForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: " Contact ",
  description: " Contact MoneyMint for any questions or concerns.",
};

export default function Contact() {
  return (
    <div className=" flex lg:flex-row flex-col max-md:pb-5 lg:gap-10 max-lg:items-center">
      <div className="relative lg:flex-1 lg:w-[30rem]  max-lg:mb-10 lg:h-[30rem] w-[20rem] h-[10rem]">
        <Image src="/contact.svg" alt="Contact Image" fill />
      </div>
      <ContactForm />
    </div>
  );
}
