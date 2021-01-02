import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import s from "./style.module.scss";
import { LogoAcademy } from "../../components/svg/LogoAcademy";
import { Button } from "../../components/Buttons/Button";

export function LoginPage() {
  const { register, handleSubmit, errors, watch } = useForm({ mode: "onBlur" });
  const inputs = watch();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    Object.values(inputs).filter((x) => x === "").length
      ? setDisabled(true)
      : setDisabled(false);
  }, [inputs]);

  return (
    <div className={s.container}>
      <form
        onSubmit={handleSubmit((datas) => {
          console.log(datas);
        })}
      >
        <LogoAcademy className={s.logo} />
        <Input
          label="E-mail"
          name="email"
          type="email"
          register={register({
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/iu,
              message: "Formato de e-mail inválido",
            },
          })}
          placeholder="exemplo@gmail.com"
          labelError={errors.email}
        />
        {errors.email && <p className={s.inputError}>{errors.email.message}</p>}
        <Input
          className={s.bullet}
          label="Senha"
          name="senha"
          type="password"
          register={register({
            required: "Campo obrigatório",
            maxLength: 10,
            minLength: 6,
          })}
          img={true}
          labelError={errors.senha}
        />
        {errors.senha && <p className={s.inputError}>{errors.senha.message}</p>}
        {errors.senha && errors.senha.type === "minLength" && (
          <p className={s.inputError}>{"Senha inferior a 6 caracteres"}</p>
        )}
        {errors.senha && errors.senha.type === "maxLength" && (
          <p className={s.inputError}>{"Senha superior a 10 caracteres"}</p>
        )}

        <div className={s.link_container}>
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>
        <Button disabled={disabled} children="Entrar" />
      </form>
      <span className={s.footer}>
        Não tem uma conta? <Link to="/signup">Cadastre-se!</Link>
      </span>
    </div>
  );
}
