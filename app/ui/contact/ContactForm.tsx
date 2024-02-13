import React from "react";

export default function ContactForm() {
  return (
    <form className="flex-1 max-w-xl">
      <h1 className="text-2xl mb-5 font-medium">Get in touch:</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input input-bordered w-full mb-5"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input input-bordered w-full mb-5"
      />
      <input
        type="number"
        name="number"
        placeholder="Number(Optional)"
        className="input input-bordered w-full mb-5"
      />
      <textarea
        name="message"
        className="textarea textarea-bordered w-full resize-none mb-5 min-h-40"
        placeholder="Message"
      />
      <button className="btn btn-primary w-full text-white">Send</button>
    </form>
  );
}
