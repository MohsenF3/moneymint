import RegisterForm from "@/app/ui/register/RegisterForm";
import { Metadata } from "next";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
  title: " Register ",
  description: " Register page",
};

export default function Register() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="flex md:flex-row flex-col md:items-center gap-3 pt-10 pb-5 px-4">
            <form className="flex-1">
              <button className="btn w-full">
                <FaGithub size={20} />
                <span>GitHub</span>
              </button>
            </form>
            <form className="flex-1">
              <button className="btn w-full">
                <FaGoogle size={20} />
                <span>Google</span>
              </button>
            </form>
          </div>

          <div className="divider">OR</div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
