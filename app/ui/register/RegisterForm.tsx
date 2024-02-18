"use client";

import { register } from "@/app/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import CustomInput from "../CustomInput";
import toast from "react-hot-toast";
import Button from "../Button";

export default function RegisterForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(register, initialState);

  if (!state?.errors && !state?.message) {
    toast.success("Welcome to Moneymint", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  if (state?.message && !state.errors) {
    toast.error(state.message, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    <form className="card-body pt-0" action={dispatch}>
      <CustomInput
        info="username"
        type="text"
        errors={state?.errors?.username}
      />
      <CustomInput info="email" type="email" errors={state?.errors?.email} />
      <CustomInput
        info="password"
        type="password"
        errors={state?.errors?.password}
      />
      <CustomInput
        info="confirmpassword"
        type="password"
        errors={state?.errors?.confirmpassword}
      />

      <div className="form-control mt-6 mb-5">
        <Button type="register" />
      </div>

      <span>
        Already have an account?
        <Link href="/login" className="ml-1 link link-primary">
          Login here
        </Link>
      </span>
    </form>
  );
}
