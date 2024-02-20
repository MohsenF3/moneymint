"use client";

import { RxMagnifyingGlass } from "react-icons/rx";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let term = event.target.value;
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathName}?${params.toString()}`);
    },
    400
  );

  return (
    <div className="relative flex flex-shrink-0 w-full max-w-3xl">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full bg-transparent rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-white"
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <RxMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white" />
    </div>
  );
}
