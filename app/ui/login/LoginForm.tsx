"use client";

import { login } from "@/app/lib/actions";
import React from "react";
import { useFormState } from "react-dom";
import CustomInput from "../CustomInput";
import Button from "../Button";
import { LoginFormProps } from "@/app/lib/definition";
import CustomLink from "../header/CustomLink";

export default function LoginForm({
  info,
  lang,
}: {
  info: LoginFormProps;
  lang: string;
}) {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form
      className="card-body pt-0"
      action={dispatch}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      <CustomInput holder={info.username} info="username" type="text" />

      <CustomInput holder={info.password} info="password" type="password" />

      {errorMessage && (
        <p className="font-semibold text-red-500">{errorMessage}</p>
      )}

      <div className="form-control mt-6 mb-5">
        <Button name={info.button} />
      </div>

      <span>
        {info.title}
        <CustomLink
          href="/register"
          lang={lang}
          className="ml-1 link link-primary"
        >
          {info.registerlink}
        </CustomLink>
      </span>
    </form>
  );
}
