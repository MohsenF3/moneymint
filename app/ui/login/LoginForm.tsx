"use client";

import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";

export default function LoginForm() {
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
          required
        />
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
          required
        />
      </div>
      <div className="form-control mt-6 mb-5">
        <LoginButton />
      </div>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      ></div>
      <span>
        Don't have an account?
        <Link href="/register" className="ml-1 link link-primary">
          Sign up Here
        </Link>
      </span>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" aria-disabled={pending}>
      Login
    </button>
  );
}
