import React, { ButtonHTMLAttributes } from "react";
import s from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: string;
  disabled?: boolean;
}

export function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <div className={s.container}>
      <button {...props} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
