import SocialLoginBtns from "@/app/ui/SocialLoginBtns";
import RegisterForm from "@/app/ui/register/RegisterForm";
import { Metadata } from "next";
import React from "react";
import { handleGithubLogin, handleGoogleLogin } from "@/app/lib/actions";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/app/lib/dictionary";

export const metadata: Metadata = {
  title: " Register ",
  description: " Register page",
};

export default async function Register({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { RegisterPage } = await getDictionary(lang);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{RegisterPage.title}</h1>
          <p className="pt-6">{RegisterPage.description}</p>
        </div>

        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="flex md:flex-row flex-col md:items-center gap-3 py-5 px-4">
            <SocialLoginBtns
              name={RegisterPage.github}
              serverAction={handleGithubLogin}
              icon="FaGithub"
            />

            <SocialLoginBtns
              name={RegisterPage.google}
              serverAction={handleGoogleLogin}
              icon="FaGoogle"
            />
          </div>

          <div className="divider">{RegisterPage.divider}</div>

          <RegisterForm info={RegisterPage.form} />
        </div>
      </div>
    </div>
  );
}
