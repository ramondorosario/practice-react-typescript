import React, { useState } from "react";
import IconProfile from "../../assets/Icon-profile.png";
import IconLogout from "../../assets/icon-logout.png";
import s from "./style.module.scss";
import { useHistory } from "react-router-dom";

export function Profile() {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const History = useHistory();

  return (
    <div className={s.container}>
      <button onClick={() => setShowProfile(!showProfile)}>
        <img src={IconProfile} alt="Foto do usuário" />
      </button>
      {showProfile && (
        <button
          className={s.card_logout}
          onClick={() => History.push("/login")}
        >
          <img src={IconLogout} alt="Ícone de logout" />
          Deslogar
        </button>
      )}
    </div>
  );
}
