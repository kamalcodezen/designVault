import RegisterForm from "@/components/auth/RegisterForm";

const SignUpPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/images/signup.png')" }}
    >
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
