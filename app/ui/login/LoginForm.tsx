"use client";

import { login } from "@/app/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import CustomInput from "../CustomInput";
import Button from "../Button";

export default function LoginForm() {
  const initialState = { message: null };
  const [state, dispatch] = useFormState(login, initialState);

  return (
    <form className="card-body pt-0" action={dispatch}>
      <CustomInput info="username" type="text" />

      <CustomInput info="password" type="password" />

      {state?.message ? (
        <p className="font-semibold text-red-500">{state.message}</p>
      ) : null}

      <div className="form-control mt-6 mb-5">
        <Button type="login" />
      </div>

      <span>
        Don't have an account?
        <Link href="/register" className="ml-1 link link-primary">
          Sign up Here
        </Link>
      </span>
    </form>
  );
}
