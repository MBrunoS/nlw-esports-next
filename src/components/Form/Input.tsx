import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <input
      {...props}
      className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500 w-full"
    />
  );
};
