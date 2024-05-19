import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-2">Crea tu cuenta en la red social</h2>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage