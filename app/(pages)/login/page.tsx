import { handleGithubLogin, handleGoogleLogin } from "@/app/lib/actions";
import SocialLoginBtns from "@/app/ui/SocialLoginBtns";
import LoginForm from "@/app/ui/login/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Login ",
  description: " Login page",
};

export default function Login() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="pt-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="flex md:flex-row flex-col md:items-center gap-3 py-5 px-4">
            <SocialLoginBtns
              name="GitHub"
              serverAction={handleGithubLogin}
              icon="FaGithub"
            />

            <SocialLoginBtns
              name="Google"
              serverAction={handleGoogleLogin}
              icon="FaGoogle"
            />
          </div>

          <div className="divider">OR</div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
