"use client";

import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";

export default function RegisterForm() {
  return (
    <form className="card-body pt-0">
      <div className="form-control">
        <label className="label" htmlFor="username">
          <span className="label-text">Username</span>
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          className="input input-bordered"
          aria-describedby="username-error"
        />
        {/* <div id="username-error" aria-live="polite" aria-atomic="true">
          {state.errors?.username &&
            state.errors.username.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          aria-describedby="email-error"
        />
        {/* <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          aria-describedby="password-error"
        />
        {/* <div id="password-error" aria-live="polite" aria-atomic="true">
          {state.errors?.password &&
            state.errors.password.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
      <div className="form-control">
        <label className="label" htmlFor="confirmpassword">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          id="confirmpassword"
          type="password"
          name="confirmpassword"
          placeholder="password"
          className="input input-bordered"
          aria-describedby="confirmpassword-error"
        />
        {/* <div id="confirmpassword-error" aria-live="polite" aria-atomic="true">
          {state.errors?.confirmpassword &&
            state.errors.confirmpassword.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
      <div className="form-control mt-6 mb-5">
        <SignupBtn />
      </div>
      {/* <div>
        {!state.errors && state.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </div> */}
      <span>
        Already have an account?
        <Link href="/login" className="ml-1 link link-primary">
          Login here.
        </Link>
      </span>
    </form>
  );
}

function SignupBtn() {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary" aria-disabled={pending}>
      Sign up
    </button>
  );
}
