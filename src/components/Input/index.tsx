import React, { InputHTMLAttributes, useState } from "react";
import { HiddenPassword } from "../svg/HiddenPassword";
import { ShowPassord } from "../svg/ShowPassword";

import s from "./style.module.scss";

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  register: any;
  img?: boolean;
  labelError: boolean;
}

export function Input({
  label,
  name,
  register,
  type,
  img,
  labelError,
  ...props
}: IinputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={`${s.container} ${labelError ? s.error : ""}`}>
      <div className={s.label_container}>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={s.input_container}>
        <input
          className={type === "password" && !showPassword ? s.bullet : ""}
          type={showPassword ? "text" : type}
          name={name}
          ref={register}
          {...props}
        />
        {img ? (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ShowPassord /> : <HiddenPassword />}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
