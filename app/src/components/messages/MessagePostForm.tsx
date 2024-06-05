"use client";
import useMessages from "@/app/context/message.context";
import { UserType } from "@/types/user.types";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type MessagePostFormTypes = {
  parentId?: string;
  currentUser?: UserType;
};

type FormData = {
  message: string;
};

const MessagePostForm = ({ parentId, currentUser }: MessagePostFormTypes) => {
  const { postMessage } = useMessages();
  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const onSubmit = async (data: FormData) => {
    await postMessage(data.message, parentId);
    resetField("message");
    setFocus("message");
  };

  const goToLogin = () => {
    router.push("/login");
    router.refresh();
  };

  if (!currentUser) {
    return (
      <div className="mb-4 flex flex-col items-center">
        <h3>Iniciá sesión para escribir un mensaje.</h3>
        <button
          className="button-primary w-fit mt-4"
          onClick={() => goToLogin()}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 grid grid-cols-12">
        <div className="w-full h-full mt-1 text-center mb-4 block relative w-20 h-20 col-span-2 flex items-center justify-center">
          <Image
            src={currentUser.photoUrl}
            priority
            className="rounded-full"
            width={60}
            height={60}
            alt={""}
          />
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="resize-none p-2 w-full mb-4 rounded bg-gray-50 border border-gray-200"
              rows={4}
              placeholder="¿Qué estás pensando?"
              {...register("message", {
                required: true,
              })}
            />
            <div className="flex justify-end">
              <button
                className="button-primary w-fit"
                onClick={handleSubmit(onSubmit)}>
                Postear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessagePostForm;
