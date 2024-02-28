"use client";

import { register } from "@/app/lib/actions";
import React from "react";
import { useFormState } from "react-dom";
import CustomInput from "../CustomInput";
import Button from "../Button";
import { RegisterFormProps, RegisterFormState } from "@/app/lib/definition";
import CustomLink from "../header/CustomLink";

export default function RegisterForm({
  info,
  lang,
}: {
  info: RegisterFormProps;
  lang: string;
}) {
  const initialState: RegisterFormState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(register, initialState);

  return (
    <form
      className="card-body pt-0"
      action={dispatch}
      dir={lang === "fa" ? "rtl" : "ltr"}
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

        <CustomLink
          href="/login"
          lang={lang}
          className="ml-1 link link-primary"
        >
          {info.loginlink}
        </CustomLink>
      </span>
    </form>
  );
}
