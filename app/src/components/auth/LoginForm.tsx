"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import authApi from "@/services/auth/auth.api";
import { AccessDeniedError } from "@/services/common/http.errors";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginScheme from "@/schemes/login.scheme";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<FormData>({
    resolver: yupResolver(LoginScheme),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.login(data.username, data.password);
      router.push("/");
      router.refresh();
    } catch (e) {
      if (e instanceof AccessDeniedError) {
        setServerError("Tus credenciales son inválidas.");
      } else {
        setServerError(
          "Se ha producido un error. Inténtelo de nuevo más tarde."
        );
      }
    }

    return false;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label={"Nombre de usuario"}
          fieldName={"username"}
          placeholder={"Anakin Skywalker"}
          type={"text"}
        />
        <InputText
          label={"Contraseña"}
          fieldName={"password"}
          placeholder={"Anakin Skywalker"}
          type={"password"}
        />
        <SubmitButton
          label={"Iniciar sesión"}
          styles="mt-4"
          onSubmit={onSubmit}
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
