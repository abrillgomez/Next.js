import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-2">Iniciar sesión en la red social</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage