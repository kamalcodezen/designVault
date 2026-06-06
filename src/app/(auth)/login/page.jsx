import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-9/12 mx-auto min-h-screen" style={{backgroundImage:"url('/images/signup.png')"}}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
