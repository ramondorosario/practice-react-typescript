import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { LogoAcademy } from "../../components/svg/LogoAcademy";
import { Button } from "../../components/Buttons/Button";
import { ButtonSecondary } from "../../components/Buttons/ButtonSecondary";
import { IconEmail } from "../../components/svg/IconEmail";
import s from "./style.module.scss";

export function ForgotPassword() {
  const { register, handleSubmit, errors, watch } = useForm({ mode: "onBlur" });
  const [disabled, setDisabled] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const History = useHistory();
  const inputs = watch();

  useEffect(() => {
    Object.values(inputs).filter((x) => x === "").length
      ? setDisabled(true)
      : setDisabled(false);
  }, [inputs]);

  return (
    <>
      {success ? (
        <div className={s.container}>
          <div className={s.card}>
            <LogoAcademy className={s.logo} />
            <IconEmail />
            <h2>Confira seu e-mail</h2>
            <span className={`${s.text} ${s.text_center}`}>
              Enviamos as instruções para recuperação de senha
            </span>

            <ButtonSecondary
              disabled={disabled}
              children="Ok, entendi"
              onClick={() => History.push("/login")}
            />
          </div>
        </div>
      ) : (
        <div className={s.container}>
          <form
            onSubmit={handleSubmit((datas) => {
              console.log(datas);
              setSuccess(true);
            })}
          >
            <LogoAcademy className={s.logo} />
            <span className={s.text}>
              Informe o e-mail associado a sua conta e vamos te enviar
              instruções para resetar sua senha
            </span>
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
            {errors.email && (
              <p className={s.inputError}>{errors.email.message}</p>
            )}
            <Button disabled={disabled} children="Recuperar senha" />
          </form>
          <span className={s.footer}>
            Não tem uma conta? <Link to="/signup">Cadastre-se!</Link>
          </span>
        </div>
      )}
    </>
  );
}
