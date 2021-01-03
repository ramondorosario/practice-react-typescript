import React, { HTMLAttributes } from "react";
import { Profile } from "../Profile";
import s from "./style.module.scss";

export function Header({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={s.container}>
      <div className={s.balance_card}>
        <div className={s.text}>
          <span>$</span> Saldo em conta
        </div>
        <div className={s.value}>R$ 0,00</div>
      </div>
      <Profile />
    </div>
  );
}
