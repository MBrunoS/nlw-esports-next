import React from "react";
import { GameController } from "phosphor-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({ icon, children, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      className={`${props.className} bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600`}
    >
      <>
        {!!icon ? icon : <GameController size={24} />}
        {children}
      </>
    </button>
  );
};
