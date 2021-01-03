import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { IconCustomers } from "../../components/svg/IconCustomers";
import { IconChanges } from "../../components/svg/IconChanges";
import s from "./style.module.scss";

export function Home() {
  const [menuSelected, setMenuSelected] = useState<string>("este mês");

  return (
    <div className={s.container}>
      <SideBar />

      <div className={s.body}>
        <Header style={{ background: "transparent" }} />
        <div className={s.content}>
          <div className={s.content_menu}>
            <ul>
              <li
                onClick={() => setMenuSelected("este mês")}
                className={menuSelected === "este mês" ? s.selected : ""}
              >
                Este mês
              </li>
              <li
                onClick={() => setMenuSelected("este ano")}
                className={menuSelected === "este ano" ? s.selected : ""}
              >
                Este ano
              </li>
              <li
                onClick={() => setMenuSelected("desde o início")}
                className={menuSelected === "desde o início" ? s.selected : ""}
              >
                Desde o início
              </li>
            </ul>
          </div>
          <div className={s.cards}>
            <div className={s.card}>
              <header className={s.header}>
                <IconCustomers />
                <span>Clientes</span>
              </header>
              <div className={s.card_content}>
                <div className={`${s.condition} ${s.in_day}`}>
                  Em dia <span className={s.value}>0</span>
                </div>
                <div className={`${s.condition} ${s.pending}`}>
                  Inadimplentes <span className={s.value}>0</span>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <header className={s.header}>
                <IconChanges />
                <span>Cobranças</span>
              </header>
              <div className={s.card_content}>
                <div className={`${s.condition} ${s.expected}`}>
                  Previstas <span className={s.value}>0</span>
                </div>
                <div className={`${s.condition} ${s.pending}`}>
                  Vencidas <span className={s.value}>0</span>
                </div>
                <div className={`${s.condition} ${s.in_day}`}>
                  Pagas <span className={s.value}>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
