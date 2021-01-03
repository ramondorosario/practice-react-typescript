import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import s from "./style.module.scss";

export function Home() {
  return (
    <div className={s.container}>
      <SideBar />
      <div className={s.content}>
        <Header />
      </div>
    </div>
  );
}
