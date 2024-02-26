"use client";

import { ContactFormProps } from "@/app/lib/definition";
import { usePathname } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Data = {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
};

export default function ContactForm({ info }: { info: ContactFormProps }) {
  const pathName = usePathname();
  const isFa = pathName.startsWith("/fa/");

  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if (loading) return toast.loading("Sending Message...");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.name) {
      return toast.error("Please enter your name");
    }
    if (!data.email) {
      return toast.error("Please enter your email");
    }
    if (!data.message) {
      return toast.error("Please enter a message");
    }

    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setData({});
      setLoading(false);
      toast.success(
        `Hey ${data.name}, your message was sent successfully! Check your inbox!`
      );
    }
  };

  return (
    <form
      className="flex-1  max-w-xl"
      onSubmit={sendEmail}
      dir={isFa ? "rtl" : "ltr"}
    >
      <input
        type="text"
        name="name"
        placeholder={info.name}
        className="input input-bordered w-full mb-5"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="email"
        name="email"
        placeholder={info.email}
        className="input input-bordered w-full mb-5"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="number"
        name="number"
        placeholder={info.number}
        className="input input-bordered w-full mb-5"
        value={data.number}
        onChange={(e) => setData({ ...data, number: e.target.value })}
      />
      <textarea
        name="message"
        className="textarea textarea-bordered w-full resize-none mb-5 min-h-40"
        placeholder={info.message}
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <button className="btn btn-primary text-white w-full">
        {info.button}
      </button>
    </form>
  );
}
