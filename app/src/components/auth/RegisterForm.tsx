"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import RegisterScheme from "@/schemes/register.scheme";
import { useState } from "react";
import { useRouter } from "next/navigation";
import authApi from "@/services/auth/auth.api";
import { ConflictError } from "@/services/common/http.errors";

type FormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const RegisterForm = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(RegisterScheme),
  });
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.register(data.username, data.password, data.name, data.photoUrl);
      router.push("/");
    } catch (e) {
      if (e instanceof ConflictError) {
        setServerError("El nombre de usuario ya existe.");
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
          label={"Tu nombre completo"}
          fieldName={"name"}
          placeholder="Anakin Skywalker"
          type="text"
        />
        <InputText
          label={"La URL de tu foto de perfil"}
          fieldName={"photoUrl"}
          placeholder={"https://..."}
          type="text"
          styles="mt-4"
        />
        <InputText
          label={"Nombre de usuario"}
          fieldName={"username"}
          placeholder={"anakin"}
          type="text"
          styles="mt-4"
        />
        <InputText
          label={"Contraseña"}
          fieldName={"password"}
          placeholder={""}
          type="password"
          styles="mt-4"
        />
        <SubmitButton
          label={"Crear cuenta"}
          styles="mt-4"
          onSubmit={onSubmit}
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
