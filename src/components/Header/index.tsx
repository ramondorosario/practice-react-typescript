import React from "react";
import { Profile } from "../Profile";
import s from "./style.module.scss";

export function Header() {
  return (
    <div className={s.container}>
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
