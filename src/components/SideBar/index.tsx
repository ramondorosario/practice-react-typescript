import React from "react";
import { Button } from "../Buttons/Button";
import { IconChanges } from "../svg/IconChanges";
import { IconHome } from "../svg/IconHome";
import { IconCustomers } from "../svg/IconCustomers";
import { LogoAcademy } from "../svg/LogoAcademyWhite";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export function SideBar() {
  return (
    <div className={s.container}>
      <LogoAcademy />
      <div className={s.menu}>
        <NavLink activeClassName={s.selected} to="/home">
          <div>
            <IconHome className={s.icon} />
            Home
          </div>
        </NavLink>
        <NavLink activeClassName={s.selected} to="/changes">
          <div>
            <IconChanges className={s.icon} />
            Cobranças
          </div>
        </NavLink>
        <NavLink activeClassName={s.selected} to="/customers">
          <div>
            <IconCustomers className={s.icon} />
            Cobranças
          </div>
        </NavLink>
      </div>
      <Button>Criar cobrança</Button>
    </div>
  );
}
