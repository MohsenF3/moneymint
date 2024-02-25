import { handleGithubLogin, handleGoogleLogin } from "@/app/lib/actions";
import { getDictionary } from "@/app/lib/dictionary";
import SocialLoginBtns from "@/app/ui/SocialLoginBtns";
import LoginForm from "@/app/ui/login/LoginForm";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Login ",
  description: " Login page",
};

export default async function Login({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { LoginPage } = await getDictionary(lang);

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{LoginPage.title}</h1>
          <p className="pt-6">{LoginPage.description}</p>
        </div>

        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="flex md:flex-row flex-col md:items-center gap-3 py-5 px-4">
            <SocialLoginBtns
              name={LoginPage.github}
              serverAction={handleGithubLogin}
              icon="FaGithub"
            />

            <SocialLoginBtns
              name={LoginPage.google}
              serverAction={handleGoogleLogin}
              icon="FaGoogle"
            />
          </div>

          <div className="divider">{LoginPage.divider}</div>

          <LoginForm info={LoginPage.form} />
        </div>
      </div>
    </div>
  );
}
