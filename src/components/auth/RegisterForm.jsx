"use client";

import "../auth/auth.css";
// import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import { Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Google login
  //   const googleSignUp = async () => {
  //     const data = await authClient.signIn.social({
  //       provider: "google",
  //     });
  //   };

  // REGISTER
  const handleRegister = async (data) => {
    const name = data?.name?.trim();
    const email = data?.email?.toLowerCase()?.trim();
    const photo = data?.photo?.trim();
    const password = data?.password?.trim();
    const confirmPassword = data?.confirmPassword?.trim();

    /* =========================
        VALIDATION
  ========================= */

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      toast.error(
        "Password must be at least 6 characters and contain uppercase & lowercase letters",
      );
      return;
    }

    try {
      const { data: DataRes, error } = await authClient.signUp.email(
        {
          name,
          email,
          image: photo,
          password,
        },
        {
          onRequest: () => {
            setLoading(true);
          },

          onSuccess: () => {
            setLoading(false);

            toast.success(
              "Account created successfully! 🌸 Welcome to Design Vault",
              {
                position: "top-right",
                autoClose: 3000,
              },
            );

            router.push("/login");
          },

          onError: (ctx) => {
            setLoading(false);
            toast.error(
              ctx.error.message || "Registration failed. Please try again",
              {
                position: "top-right",
                autoClose: 4000,
              },
            );
          },
        },
      );
      // console.log(DataRes, error, "data");
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 4000,
      });
      // console.log(err);
    }
  };

  return (
    <div className="relative w-11/12 mx-auto min-h-screen flex items-center justify-center lg:justify-end">
      <div className="min-h-[80vh] flex flex-col items-center justify-center w-full max-w-md  px-4 py-6 bg-white/[0.03]  backdrop-blur-2xl border border-white/10 rounded shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Header */}
        <div className="text-center mb-3">
          <h1
            className="text-3xl bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent font-serif font-bold "
          >
            Create Account
          </h1>

          <p className="text-gray-200 ">Join our design community</p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)}>
          {/* name */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="text"
                {...register("name", { required: "kamalUddin*" })}
                placeholder=" "
              />
              <label>Your Name</label>{" "}
            </div>
            {errors.name && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="email"
                {...register("email", { required: "kamal@exmaple.com*" })}
                placeholder=" "
              />
              <label>Email Address</label>{" "}
            </div>
            {errors.email && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* photo */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="photo"
                {...register("photo", { required: "https/Example*" })}
                placeholder=" "
              />
              <label>Profile Image URL</label>{" "}
            </div>
            {errors.photo && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.photo?.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="mb-3">
            <div className="input-group ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                {...register("password", {
                  required:
                    "Must be at least 6 characters with 1 uppercase and 1 number*",
                })}
              />
              <label>Password</label>
              <span
                className="absolute right-2 top-2 text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="w-4.5" />
                ) : (
                  <EyeOff className="w-4.5" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>

          {/* confirmPassword */}
          <div className="mb-3">
            <div className="input-group ">
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder=" "
                {...register("confirmPassword", {
                  required: "Passwords do not match*",
                })}
              />
              <label>Confirm Password</label>
              <span
                className="absolute right-2 top-2 text-gray-600 cursor-pointer"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {confirmPassword ? (
                  <Eye className="w-4.5" />
                ) : (
                  <EyeOff className="w-4.5" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          {/* create button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 text-white mb-3   disabled:cursor-not-allowed
              disabled:opacity-70 rounded-full"
          >
            {loading ? (
              <>
                <p>
                  Create Account...
                  <span className="loading loading-spinner w-4.5"></span>
                </p>
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Google */}
          <Button
            variant="secondary"
            className="w-full hover:bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 hover:text-white mb-3 border border-border rounded-full transition-all duration-300"
            onPress={() => {
              googleSignUp();
              toast.info("Google login coming soon! ", {
                position: "top-right",
                autoClose: 3000,
              });
            }}
            // onClick={googleSignUp}
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </Button>

          <p className="text-sm text-center text-gray-300 ">
            Already have an account?
            <span className="text-orange-600">
              <Link href={"/login"}> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
