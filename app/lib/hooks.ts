import React, { useEffect } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: Handler
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
