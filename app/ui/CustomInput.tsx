import React from "react";
import { CustomInputProps } from "../lib/defenition";

export default function CustomInput({ type, info, errors }: CustomInputProps) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={info}>
        <span className="label-text capitalize ">
          {info === "confirmpassword" ? "Confirm Password" : info} :
        </span>
      </label>
      <input
        id={info}
        type={type}
        name={info}
        placeholder={info}
        className="input input-bordered"
        aria-describedby={`${info}-error`}
      />

      {/* show error */}
      <div
        className="flex"
        id="customer-error"
        aria-live="polite"
        aria-atomic="true"
      >
        {errors?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}
