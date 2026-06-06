import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/signup.png')" }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
