"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function Button({ name }: { name: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-primary disabled:cursor-wait text-white"
      disabled={pending}
    >
      {pending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        name
      )}
    </button>
  );
}
