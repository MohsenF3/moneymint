"use client";

import { register } from "@/app/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import CustomInput from "../CustomInput";
import toast from "react-hot-toast";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { RegisterFormProps } from "@/app/lib/definition";

export default function RegisterForm({ info }: { info: RegisterFormProps }) {
  const pathName = usePathname();
  const isFa = pathName.startsWith("/fa/");
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
    <form
      className="card-body pt-0"
      action={dispatch}
      dir={isFa ? "rtl" : "ltr"}
    >
      <CustomInput
        holder={info.username}
        info="username"
        type="text"
        errors={state?.errors?.username}
      />
      <CustomInput
        holder={info.email}
        info="email"
        type="email"
        errors={state?.errors?.email}
      />
      <CustomInput
        holder={info.password}
        info="password"
        type="password"
        errors={state?.errors?.password}
      />
      <CustomInput
        holder={info.confirmpassword}
        info="confirmpassword"
        type="password"
        errors={state?.errors?.confirmpassword}
      />

      <div className="form-control mt-6 mb-5">
        <Button name={info.button} />
      </div>

      <span>
        {info.title}
        <Link
          href={`/${isFa ? "fa" : "en"}/login`}
          className="ml-1 link link-primary"
        >
          {info.loginlink}
        </Link>
      </span>
    </form>
  );
}
