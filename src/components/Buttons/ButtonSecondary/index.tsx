import React, { ButtonHTMLAttributes } from "react";
import s from "./style.module.scss";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLElement> {
  children: string;
  disabled: boolean;
}

export function ButtonSecondary({
  children,
  disabled,
  ...props
}: ButtonSecondaryProps) {
  return (
    <div className={s.container}>
      <button {...props} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
