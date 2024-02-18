"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function Button({ type }: { type: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary disabled:cursor-wait" disabled={pending}>
      {pending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : type === "register" ? (
        "Sign Up"
      ) : (
        "Login"
      )}
    </button>
  );
}
