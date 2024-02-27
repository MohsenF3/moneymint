"use client";

import { ContactFormProps } from "@/app/lib/definition";
import { usePathname } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Data = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export default function ContactForm({ info }: { info: ContactFormProps }) {
  const pathName = usePathname();
  const isFaLang = pathName.split("/")[1] === "fa";

  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if (loading) {
    toast.loading("Sending Message...");
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    try {
      await fetch("/api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success(`Hey ${data.name}, your message was sent successfully!`);
    } catch (error) {
      toast.error(`Dear ${data.name}, something went wrong.`);
    } finally {
      setLoading(false);
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1  max-w-xl"
      dir={isFaLang ? "rtl" : "ltr"}
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
      <button disabled={loading} className="btn btn-primary text-white w-full">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          info.button
        )}
      </button>
    </form>
  );
}
