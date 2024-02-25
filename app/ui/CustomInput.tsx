import React from "react";
import { CustomInputProps } from "../lib/definition";

export default function CustomInput({
  type,
  info,
  errors,
  holder,
}: CustomInputProps) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={info}>
        <span className="label-text capitalize ">{holder}</span>
      </label>
      <input
        id={info}
        type={type}
        name={info}
        placeholder={holder}
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
